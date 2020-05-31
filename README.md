# ez-vue-chart

vue组件ez-chart结合外部依赖`EzChart` `vue` `echarts` 为用户快捷生成图表的组件

## 安装

`npm install ez-vue-chart`
`yarn add ez-vue-chart`

## 使用

```javascript
// ES6
import Vue  from 'vue'
import ezVueChart from 'ez-vue-chart'
Vue.use(ezVueChart)

//.vue
<ez-chart log :data="data" :keyMap="['label', 'val', 'val2']" type="bar" register="click"></ez-chart>

```

## 参数
