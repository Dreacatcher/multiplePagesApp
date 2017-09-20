
import Vue from 'vue'
import List from './listVue'
import { Button, Select } from 'element-ui'
Vue.use(Button)
Vue.use(Select)

new Vue({
  el: '#list',
  template: '<List/>',
  components: { List }
})