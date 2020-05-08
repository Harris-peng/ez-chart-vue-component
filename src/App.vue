<template>
  <div id="app">
      <ez-chart style="width: 300px;height: 300px" :data="data" :keyMap="['label', 'val']" type="bar"></ez-chart>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: [
        {
          label: 'test',
          val: 111,
        },
        {
          label: 'test2',
          val: 222,
        },
        {
          label: 'test4',
          val: 333,
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
