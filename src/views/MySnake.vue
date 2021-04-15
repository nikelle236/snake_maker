<template>
<div class="form">
  <h1>Adopt This Snake</h1>
  <SnakePic />
  <form v-if="creating" @submit.prevent="addAdopted">
    <input v-model="userName" placeholder="Your Name">
    <p></p>
    <input v-model="snakeName" placeholder="Snake Name">
    <p></p>
    <br />
    <button type="submit">Submit</button>
  </form>
  <div v-else>
    <p>Thank you for adopting! Go back to the home page to create another.</p>
    <p><a @click="toggleForm" href="#"></a></p>
  </div>
  <hr>
</div>
</template>

<script>
import SnakePic from "../components/SnakePic.vue"
export default {
  name: 'create',
  components: {
    SnakePic
  },
  data() {
    return {
      creating: true,
      userName: '',
      snakeName: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addAdopted() {
      //this.$root.$data.addAdopted(this.userName, this.snakeName);
      this.userName = "";
      this.snakeName = "";
      this.creating = false;
    },
  }
}
</script>

<style scoped>
.form {
    text-align: center;
}

input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

button {
  font-size: 1.2em;
  background: #355032;
  color: white;
}
</style>
