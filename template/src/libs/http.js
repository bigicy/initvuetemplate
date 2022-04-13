import axios from "axios"
import getDate from "./date"
import qs from "qs"
import store from '../store'
import Cookies from 'js-cookie'
export const Axios = axios.create({
  // baseURL: process.env.NODE_ENV === "development" ? config.baseUrl.dev : config.baseUrl.pro, // 基础域名设置
  baseURL: "/groundtrafficenterprisewechat/walkThrough",
  timeout: 10000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  crossDomain: true, // 支持跨域
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
})

// 请求拦截器
Axios.interceptors.request.use(
  (config) => {
    if (config.data && config.method === "get") {
      // get 方法的时候，拼接字符串
      config.url = config.url + "?" + qs.stringify(config.data)
    }
    // 设置公共请求参数
    if (config.data && config.method === "post") {
      console.log('usr----',Cookies.get('usr'))
      console.log('usr_id----',Cookies.get('usr_id'))
      config.data["empCode"] = Cookies.get('usr_id') || '' // 工号
      config.data["empName"] = Cookies.get('usr') || ''  // 姓名
      config.data["lng"] = store.state.location[0] || ''  // 经度
      config.data["lat"] = store.state.location[1] || '' // 纬度
      config.data["logId"] = getDate()
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
Axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios })
  },
}
