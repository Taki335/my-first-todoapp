import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var component = {
  data: () => {},
  methods: {}
}

Vue.component ('my-component', component)

new Vue({
  render: h => h(App),
}).$mount('#app')
