import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as mockBodies from './mock-bodies.js'
import * as mockStripes from './mock-stripes.js'

let data = {
  bodies: mockBodies.default,
  stripes: mockStripes.default,
  selectedBodyColor: "",
  selectedStripeColor: "",
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
