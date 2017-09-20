
import Vue from 'vue'
import App from './indexVue'

// new Vue({
//   render: h => h(App)
// }).$mount('#home2')
/* eslint-disable no-new */
new Vue({
  el: '#index',
  template: '<App/>',
  components: { App }
})