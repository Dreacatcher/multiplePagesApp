/*
* @Author: lcm
* @Date:   2017-04-17 18:01:21
 * @Last Modified by: lucm
 * @Last Modified time: 2017-09-20 16:50:00
*/

'use strict'
var path = require('path')
var srcDir = path.resolve(process.cwd(), 'src')
var demoStore = require('./demoStore')

var base = {
  // lib
  vue$: 'vue/dist/vue.esm',
  // lib
  store: srcDir + '/store/index',
  // tools
  base: srcDir + '/tools/base',
  fetch: srcDir + '/tools/fetch',
  storage: srcDir + '/tools/storage',
  url: srcDir + '/tools/url',
  common: srcDir + '/tools/common',
  base64: srcDir + '/tools/base64',
  placeholder: srcDir + '/tools/jquery.placeholder.min',
  user: srcDir + '/tools/user',

  'vue$': 'vue/dist/vue.esm.js',
  '@': path.resolve('src'),
  'src': path.resolve(__dirname, '../src'),
  'assets': path.resolve(__dirname, '../src/assets'),
  'components': path.resolve(__dirname, '../src/components')
}
var newConfig = Object.assign(base,
  demoStore
);
module.exports = newConfig


