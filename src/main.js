import Vue from 'vue'
import lodash from 'lodash';
import echarts from 'echarts'
import EzChart from 'ez-chart'
// import EzChart from './ez-chart/index'
import ezVueChart from 'ez-vue-chart'
// import ezVueChart from '../dist/ez-vue-chart'
console.log(ezVueChart)
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
import App from './App.vue'
Vue.use(ezVueChart)
console.log(EzChart.options);
new Vue({
  el: '#app',
  render: h => h(App)
})
