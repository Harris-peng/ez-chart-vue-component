import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash';
import echarts from 'echarts'
import EzChart from 'ez-chart'
import ezVueChart from 'ez-vue-chart'
//import ezVueChart from '../src/component/echarts/index'
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
