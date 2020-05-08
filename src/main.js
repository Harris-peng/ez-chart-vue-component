import Vue from 'vue'
import App from './App.vue'
import EzChart from './component/echarts'
Vue.use(EzChart)
const test = new Vue({
  el: '#app',
  render: h => h(App)
})
console.log(test);
