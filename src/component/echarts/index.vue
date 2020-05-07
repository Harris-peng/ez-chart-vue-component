<template>
  <div ref="charts" class="eez-charts-wrapper"></div>
</template>
<script>
  import echarts from 'echarts'
  import EzChart from 'ez-chart'
  import throttle from 'lodash/throttle'
  import _isArray from 'lodash/isArray'

  export default {
    name: 'ez-charts',
    props: {
      data: {
        type: [Array, Object],
        required: true
      },
      type: {
        type: String,
        required: true,
        validator: function (type) {
          return EzChart.checkType(type)
        }
      },
      keyMap: {
        type: Array,
        default () {
          return []
        }
      },
      register: {
        type: Boolean,
        default: false
      },
      log: {
        type: Boolean,
        default: false
      },
      params: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        noData: false,
        resizeChart: () => {},
        noDataDom: '',
        chart: null
      }
    },
    methods: {
      getOptions () {
        return EzChart.getOption(this.datas, this.type, this.keyMap, this.params)
      },
      resize () {
        this.resizeChart()
      },
      logMessage (message) {
        if (this.log) {
          console.log(`${this.$route.name}-->echarts-->type-->${this.type}-->message--》:`, message)
        }
      },
      setNoDataDom () {
        const node = document.createElement('div')
        node.className = 'echarts-no-data'
        const text = document.createTextNode('暂无数据')
        node.appendChild(text)
        return node
      },
      removeNoDataDom () {
        const dom = this.$refs.charts.getElementsByClassName('echarts-no-data')[0]
        dom && this.$refs.charts.removeChild(dom)
      },
      renderChart () {
        if ((_isArray(this.datas) && this.datas.length) || (this.datas.data && (this.datas.data.length || Object.keys(this.datas.data).length))) {
          const options = this.getOptions()
          this.removeNoDataDom()
          this.logMessage(JSON.stringify(options))
          this.noData = false
          this.chart.setOption(options)
        } else {
          this.noData = true
          this.noDataDom = this.setNoDataDom()
          this.$refs.charts.appendChild(this.noDataDom)
          this.chart.setOption({}, { notMerge: true })
          this.logMessage('暂无数据')
          this.logMessage(JSON.stringify(this.datas))
        }
      }
    },
    watch: {
      datas: function (newVal) {
        this.$nextTick(() => {
          this.logMessage('watch data change')
          this.renderChart()
        })
      }
    },
    mounted () {
      this.logMessage('init')
      this.chart = echarts.init(this.$refs.charts, 'tdTheme')
      this.renderChart()
      this.resizeChart = throttle(() => {
        this.logMessage('resize')
        this.chart.resize()
      }, 500)
      window.addEventListener('resize', this.resizeChart)
      const _this = this
      if (this.register) {
        this.logMessage('register click event')
        this.chart.on('click', function (params) {
          _this.$emit('listener', params, _this.datas)
        })
      }
    },
    destroyed () {
      window.removeEventListener('resize', this.resizeChart)
      this.chart && this.chart.dispose()
      this.logMessage('destroyed echarts')
    }
  }
</script>

<style scoped>
  .eez-charts-wrapper {
    position: relative;
  }
  /deep/ .echarts-no-data {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
</style>
