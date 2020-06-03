<template>
  <div class="ez-charts">
    <div ref="charts" class="ez-charts-wrapper"></div>
    <slot v-if="!noData">
      <div class="ez-charts-no-data">暂无数据</div>
    </slot>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import EzChart from 'ez-chart'
  import lodash from 'lodash'
  const eventList = {
    'click': true,
    'dblclick': true,
    'mousedown': true,
    'mousemove': true,
    'mouseup': true,
    'mouseover': true,
    'mouseout': true,
    'globalout': true,
    'contextmenu': true
  }
  export default {
    name: 'ez-chart',
    props: {
      type: {
        type: String,
        required: true,
        validator: function (type) {
          return EzChart.utils.checkType(type)
        }
      },
      keyMap: {
        type: Array,
        default () {
          return ['label', 'value']
        }
      },
      data: {
        type: [Array, Object],
        required: true
      },
      params: {
        type: Object,
        default () {
          return {}
        }
      },
      echartsInitOptions: {
        type: Object,
        default () {
          return {}
        }
      },
      registerTheme: {
        type: String,
        default: ''
      },
      register: {
        type: [String, Array],
        validator: function (events) {
          if (typeof events === 'string') events = [events]
          const res = events.filter(event => {
            return !eventList[event]
          })
          return !res.length
        }
      },
      resizeWaiting: {
        type: Number,
        default: 500
      },
      styles: {
        type: Object,
        default () {
          return {
            height: '300px',
            width: 'auto',
          }
        }
      },
      log: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        resizeChart: () => {},
        events: lodash.isArray(this.register) ? this.register : [this.register],
        ezChart: null,
        echarts: null
      }
    },
    created() {
      this.ezChart = new EzChart();
    },
    computed: {
      noData () {
        return this.hasData();
      }
    },
    watch: {
      data: function (newVal) {
        this.$nextTick(() => {
          this.logMessage('watch data change')
          this.renderChart()
        })
      }
    },
    methods: {
      getOptions () {
        return this.ezChart.getOption({data: this.data, type: this.type, keyMap: this.keyMap, params: this.params})
      },
      renderChart () {
        this.logMessage('beginRender')
        if (this.hasData()) {
          const options = this.getOptions()
          this.logMessage(options)
          this.echarts.setOption(options)
        }
        this.logMessage('endRender')
      },
      logMessage (message) {
        if (this.log) {
          console.log(`echarts-->type-->${this.type}-->message--》:`, message)
        }
      },
      hasData () {
        if (lodash.isArray(this.data)) {
          return Boolean(this.data.length);
        } else {
          return Boolean(Object.keys(lodash.get(this, 'data.data'), {}).length)
        }
      }
    },
    mounted () {
      this.logMessage('beginInit')
      const {width, height} = this.styles;
      this.echarts = echarts.init(this.$refs.charts, this.registerTheme, Object.assign({width, height}, this.echartsInitOptions));
      this.renderChart()
      this.resizeChart = lodash.throttle(() => {
        this.logMessage('beginResize')
        this.echarts.resize()
        this.logMessage('endResize')
      }, this.resizeWaiting)
      window.addEventListener('resize', this.resizeChart)
      const _this = this
      if (this.register) {
        this.logMessage(`register ${this.register} event`)
        this.events.forEach(event => {
          this.echarts.on(event, function (params) {
            _this.logMessage(`emit ${event} event`)
            _this.$emit('listener', event, params, _this.data)
          })
        })
      }
      this.logMessage('EndInit')
    },
    destroyed () {
      window.removeEventListener('resize', this.resizeChart)
      this.echarts && this.echarts.dispose()
      this.logMessage('destroyed echarts')
    }
  }
</script>

<style scoped>
  .ez-charts,.ez-charts-wrapper {
    position: relative;
  }
  .ez-charts-no-data {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
</style>
