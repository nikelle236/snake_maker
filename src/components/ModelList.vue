<template>
<div class="wrapper">
  <h1>Body Colors</h1>
  <div class="bodies">
    <div class="body" v-for="body in bodies" :key="body.id">
      <div class="info">
        <h1>{{body.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/snakes/bodies/'+body.image">
      </div>
      <div class="under">
        <p class="modelSay">{{body.saying}}</p>
        <div class="selectButton">
          <button v-if="bodyColor===body.name"  v-bind:style="{ 'background-color': '#579151' }" class="auto">Added to Snake</button>
          <button v-else @click="addBodyColor(body.name)" class="auto">Add to Snake</button>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <h1>Stripe Colors</h1>
  <div class="stripes">
    <div class="stripe" v-for="stripe in stripes" :key="stripe.id">
      <div class="info">
        <h1>{{stripe.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/snakes/stripes/'+stripe.image">
      </div>
      <div class="under">
        <p class="modelSay">{{stripe.saying}}</p>
        <div class="selectButton">
          <button v-if="stripeColor===stripe.name"  v-bind:style="{ 'background-color': '#579151' }" class="auto">Added to Snake</button>
          <button v-else @click="addStripeColor(stripe.name)" class="auto">Add to Snake</button>
        </div>
      </div>
    </div>
  </div>
  <hr>
</div>
</template>

<script>
export default {
  name: 'ModelList',
  props: {
    bodies: Array,
    stripes: Array,
  },
  methods: {
    addBodyColor(bodyColor) {
      this.$root.$data.selectedBodyColor = bodyColor
    },
    addStripeColor(stripeColor) {
      this.$root.$data.selectedStripeColor = stripeColor
    }
  },
  computed: {
    bodyColor() {
      return this.$root.$data.selectedBodyColor
    },
    stripeColor() {
      return this.$root.$data.selectedStripeColor
    }
  }
}
</script>

<style scoped>
.wrapper {
  justify-content: center;
}

.stripes {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

h1 {
  text-align: center;
}

.stripe {
  margin-top: 50px;
  width: 220px;
  margin: 30px;
  background: #7ee075;
}

.stripe img {
  border: 2px solid #333;
  background: white;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.stripe .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.bodies {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.body {
  margin-top: 50px;
  width: 220px;
  background: #7ee075;
  margin: 30px;
}

.body img {
  border: 2px solid #333;
  background: white;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.body .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #7ee075;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

button {
  height: 30px;
  width: 220px;
  background: #355032;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}

.modelSay {
  text-align: center;
  font-size: 15px;
}

.under {
  text-align: center;
  justify-content: center;
}
</style>