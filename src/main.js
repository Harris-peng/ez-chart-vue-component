import Vue from 'vue'
import EzChart from 'ez-chart'
import ezVueChart from 'ez-vue-chart'
// import EzChart from './ez-chart/index'
// import ezVueChart from './component/echarts/index'
import App from './App.vue'
EzChart.extend({
  customCharts: {
    bottomLegind (options) {
      const option = this.getOption(Object.assign(options, {type: options.params.type}));
      Object.assign(option.legend, {
        bottom: 20,
        left: 'center',
        orient: 'horizontal'
      })
      return option
    }
  }
});
Vue.use(ezVueChart)
new Vue({
  el: '#app',
  render: h => h(App)
})
