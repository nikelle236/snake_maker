<template>
    <div class="image">
        <img :src="'/snakes/finished/'+getPath()" />
    </div>
</template>

<script>
export default {
  name: "SnakePic",
  props: {
    products: String
  },
  methods: {
    getPath() {
        const stripes = {
            "blue stripes": "stripes_blue",
            "red stripes": "stripes_red",
            "yellow stripes": "stripes_yellow",
            "" : "plain"
        }
        let snakeColor = this.$root.$data.selectedBodyColor.toLowerCase()
        if (snakeColor==="") {
            snakeColor="green"
        }
        let snakeStripes = stripes[this.$root.$data.selectedStripeColor.toLowerCase()]

        return `${snakeColor}_${snakeStripes}.png` 
    }
  }
}
</script>

<style scoped>
    .image img{
        height: 250px;
        width: 250px;
    }
</style>