# ez-vue-chart
结合[ez-chart](https://www.npmjs.com/package/ez-chart)使用的vue组件，自动watch数据
打印log，监听resize事件等

## 安装

`npm install ez-vue-chart`
`yarn add ez-vue-chart`

## 使用

```javascript
// main.js
import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash';
import echarts from 'echarts'
import EzChart from 'ez-chart'
import ezVueChart from 'ez-vue-chart'
Vue.use(ezVueChart)
new Vue({
  el: '#app',
  render: h => h(App)
})
// app.vue
<template>
  <div id="app">
      <ez-chart :data="data" :keyMap="['label', 'val', 'val2']" type="bar" register="click"></ez-chart>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      data: [
        {
          label: 'test',
          val: 111,
          val2: 31,
        },
        {
          label: 'test2',
          val: 312,
          val2: 142,
        }
      ]
    }
  }
}
</script>

```
## 示例地址
[展示地址](http://39.105.196.85:8081/)
## 参数

### EzVueChart Attributes
|参数 |	说明	| 类型	| 可选值 |	默认值 |
|:-:|:-:|:-:|:-:|:-:|
|type|选择渲染的图表类型|string|bar/line/pie/funnel/scatter 以及customType|--|--|
|keyMap|传入的data中需要提取的值的key集合|Arrary:string|--|\['label', 'value'\]|
|data|原始数据|array\<object\>|--|--|
|params|ezChart.getOption的params参数|object|--|{}|
|echartsInitOptions|echarts.init初始化时的参数|object|--|{}|
|registerTheme|使用的图标主题|string|--|''|
|register|注册的事件|string\|array|--|--|
|resizeWaiting|resize事件触发防抖函数的等待时间|number|--|500|
|styles|默认的图表样式只会拿到宽度和高度作为echarts.init的初始项，会被`echartsInitOptions`覆盖|Object|--|{ height: '300px',width: 'auto'}|
|log|是否打印日志|Boolean|--|false|

### EzVueChart Methods

|方法名	|说明	|参数
|:-:|:-:|:-:|
|renderChart|渲染图表|--|

### EzVueChart Events

|事件名称	|说明	|参数
|:-:|:-:|:-:|
|listener|触发绑定的监听事件|event 事件名称, params `echarts`返回的原始参数, data 原始数据|
### EzVueChart Slot

|名称	|说明	|
|:-:|:-:|
|--|自定义缺省页样式|

## 外部依赖
```javascript
externals = {
    echarts: 'echarts',
    'ez-chart': 'EzChart',
    vue: 'Vue',
    lodash: 'lodash',
}
```
