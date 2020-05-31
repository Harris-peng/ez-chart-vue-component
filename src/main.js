import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash';
import EzChart from 'ez-chart'
import echarts from 'echarts'
import ezVueChart from '../dist2/index.8492a3b9ff6ffe3e547b.js'
EzChart.extend({
  customCharts: {test: {}}
})
Vue.use(ezVueChart)
const test = new Vue({
  el: '#app',
  render: h => h(App)
})
