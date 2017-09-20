/*
 * @Author: lucm
 * @Date: 2017-06-08 11:06:27
 * @Last Modified by: lucm
 * @Last Modified time: 2017-09-20 17:07:10
 */
import Vue from 'vue'
import Vuex from 'vuex'
import DemoStore from 'DemoStore'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    DemoStore
  }
})


