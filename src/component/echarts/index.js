import chart from './index.vue'
export default {
  install (Vue, options) {
    console.log(1);
    Vue.component('ezChart', chart)
    console.log(Vue);
  }
}
