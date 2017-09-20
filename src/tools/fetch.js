/*
* @Author: lcm
* @Date:   2017-05-27 14:36:08
 * @Last Modified by: lucm
 * @Last Modified time: 2017-09-20 17:16:02
*/
import axios from 'axios'
var Base64 = require('js-base64').Base64;
var Buffer = require('buffer').Buffer;
// ******************************* Setting ***********************************/
let appid = Base64.encode('BASMD5-DSS-520-DSS') // 假的
let appkey = 'vws3236ce4fdscsfdsecdserr3232fdsf30d835243czxccxzcz4fds'// 假的
let siteid = '520100'// 假的
// ******************************* Setting ***********************************/
class Fetch {
  packageParamBase(param) {
    let _param = param || {}
    //生成MD5签名加密
    let crypto = require('crypto');
    let md5 = crypto.createHash('md5');
    let _sign = md5.update(encodeURI((Buffer(JSON.stringify(_param) + appid)) + siteid) + appkey).digest('hex');
    let _requestParam = {
      head: {
        appid: appid,
        sign: _sign,
        siteid: siteid,
        version: '1.0'
      },
      body: param
    }
    return _requestParam
  }
  httpRequestPostHasUTF8(url, data, callback) {
    // POST
    let _data = this.dataEncode(data)
    let _requestParam = this.packageParamBase(_data)
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
    axios
      .post(url, _requestParam)
      .then(function (response) {
        callback(response)
      })
      .catch(function (error) {
        error.rtnCode = '999999'
        error.rtnMsg = '发生未知异常'
        callback(error)
      })
  }
  httpRequestPost(url, data, callback) {
    // POST
    let _data = this.dataEncode(data)
    let _requestParam = this.packageParamBase(_data)
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    axios
      .post(url, _requestParam)
      .then(function (response) {
        callback(response)
      })
      .catch(function (error) {
        error.rtnCode = '999999'
        error.rtnMsg = '发生未知异常'
        callback(error)
      })
  }
  httpRequestGet(url, data, callback) {
    // GET
    data = this.dataEncode(data)
    axios
      .get(url, {
        params: data
      })
      .then(function (response) {
        callback(response)
      })
      .catch(function (response) {
        response.rtnCode = '999999'
        response.rtnMsg = '发生未知异常'
        callback(response)
      })
  }
  // ---------------XSS和mongo注入--------------//
  htmlEncode(str) {
    let s = ''
    if (str.length === 0) return ''
    // s = str.replace(/ /g, "&nbsp;");
    // s = str.replace(/&/g, "&amp;");
    s = str.replace(/</g, '%26lt%3B')
    s = s.replace(/%3C/g, '%26lt%3B')
    s = s.replace(/%3c/g, '%26lt%3B')
    s = s.replace(/>/g, '%26gt%3B')
    s = s.replace(/%3E/g, '%26gt%3B')
    s = s.replace(/%3e/g, '%26gt%3B')
    s = s.replace(/\$/g, "&#36;");
    // s = s.replace(/\'/g, "&#39;");
    // s = s.replace(/\"/g, "&quot;");
    // s = s.replace(/\n/g, "<br>");
    return s
  }
  dataEncode(data) {
    // Encode
    let rel = data
    let source = ''
    if (typeof rel === 'object') {
      source = this.htmlEncode(JSON.stringify(rel))
      source = JSON.parse(source)
      rel = source
    } else if (typeof rel === 'string') {
      source = this.htmlEncode(rel)
      rel = source
    }
    return rel
  }
}
export default new Fetch()
