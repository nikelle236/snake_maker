<template>
<div>
  <ModelList :bodies="bodies" :stripes="stripes"/>
</div>
</template>

<script>
import ModelList from "../components/ModelList.vue"
export default {
  name: 'Home',
  components: {
    ModelList
  },
  data() {
    return {
    }
  },
  computed: {
    bodies() {
      return this.$root.$data.bodies;
    },
    stripes() {
      console.log(this.$root.$data.stripes)
      return this.$root.$data.stripes;
    }
  },
}
</script>