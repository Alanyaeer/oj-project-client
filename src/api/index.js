import axios from 'axios'
import { ElNotification } from 'element-plus';
import {useRouter} from 'vue-router' 
//全局参数，自定义参数可在发送请求时设置
axios.defaults.timeout = 600000 //超时时间ms
axios.defaults.withCredentials = true
const router = useRouter()
// 请求时的拦截
//回调里面不能获取错误信息

axios.interceptors.request.use(
  function (config) {
    config.headers['attack-code'] = "Eren_yeager"
    if(localStorage.getItem('token') != null){
      config.headers['token'] = localStorage.getItem('token')
    }
    return config;  
  },
  function (error) {
    // 当请求异常时做一些处理
    router.push('/404')
    return Promise.reject(error);
  }
);
   // 上线的时候记得要更换
axios.interceptors.response.use(function (response) {
  let red = response.data
  if(red.code === 0){
    return Promise.reject(red)

  }
  // Do something with response data
  return red
}, function (error) {
  // Do something with response error
  // loadingInstance.close();
  return Promise.resolve(error)
})

// 这里上线之后需要修改

const base = {
  axios: axios,
  baseUrl: 'http://localhost:180'
}

export default base
