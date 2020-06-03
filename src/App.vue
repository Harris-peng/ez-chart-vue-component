<template>
  <div id="app">
    <ez-chart :data="data" :keyMap="['label', 'val', 'val2']" type="bar" @listener="listener" :register="['mouseover', 'click']"></ez-chart>
    <ez-chart :data="data" :keyMap="['label', 'val']" type="pie"></ez-chart>
    <ez-chart :data="data" :keyMap="['label', 'val', 'val2']" type="line"></ez-chart>
    <ez-chart :data="funnelData" :keyMap="['label', 'val']" type="funnel"></ez-chart>
    <ez-chart :data="data" :keyMap="['label', 'val']" log :params="{type: 'pie'}" type="bottomLegind"></ez-chart>
    <ez-chart :data="data2" :keyMap="['val']" type="scatter"></ez-chart>
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
          },
          {
            label: 'test4',
            val: 333,
            val2: 112,
          }
        ],
        funnelData: [
          {
            label: 'test1',
            val: 25,
          },
          {
            label: 'test2',
            val: 50,
          },
          {
            label: 'test3',
            val: 75,
          },
          {
            label: 'test4',
            val: 100,
          }
        ],
        data2: [
          {
            name: 'test',
            val: [10.0, 8.04],
          },
          {
            name: 'tes2t',
            val: [8.0, 6.95],
          },{
            name: 'te32s3t',
            val: [13.0, 7.58],
          },{
            name: 't1es3t',
            val:  [9.0, 8.81],
          },{
            name: 'te13s3t',
            val: [11.0, 8.33],
          },{
            name: 't3es3t',
            val: [14.0, 9.96],
          },{
            name: 't1es3t',
            val: [6.0, 7.24],
          },{
            name: 't4es3t',
            val: [4.0, 4.26],
          },{
            name: 'tes123t',
            val: [12.0, 10.84],
          },{
            name: 'te2s3t',
            val: [7.0, 4.82],
          },{
            name: 'tes113t',
            val: [5.0, 5.68]
          },
        ]
      }
    },
    methods: {
      listener (event, parmas, data) {
        console.log(event, parmas, data)
      }
    }
  }
</script>
