import axios from 'axios'
import { ElNotification } from 'element-plus';
//全局参数，自定义参数可在发送请求时设置
axios.defaults.timeout = 600000 //超时时间ms
axios.defaults.withCredentials = true


axios.interceptors.request.use(
  function (config) {

    return config;
  },
  function (error) {
    // 当请求异常时做一些处理

    ElNotification({
      type:'error',
      title: '请求失败🎈',
      message: '请求的时候的问题🤕'
    })  
    return Promise.reject(error);
  }
);
   // 上线的时候记得要更换
axios.interceptors.response.use(function (response) {
  let red = response.data
  if(red.code === 0){
    ElNotification({
      type:'error',
      title: '响应失败🎈',
      message: red.msg+ '🤕'
    })  
    return Promise.reject(red)

  }
  // Do something with response data
  return red
}, function (error) {
  // Do something with response error
  ElNotification({
    type:'error',
    title: '响应失败🎈',
    message: '响应的时候的问题🤕'
  })  
  // loadingInstance.close();
  return Promise.reject(error)
})

const base = {
  axios: axios,
  baseUrl: 'http://192.168.46.177:8081'
}

export default base
