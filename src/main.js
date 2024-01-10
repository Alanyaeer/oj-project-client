import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import '@/assets/font/font.css';
import '@/css/global.css'
import App from './App.vue'
import router from './router'
import TeaDesign from 'tea-design'
import 'tea-design/dist/style.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import _relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // 如果需要中文显示，可以引入相应的语言包
// import relative-time from  '@github/relative-time-element'
// import githu
const app = createApp(App)
app.use(createPinia().use(persist))
app.use(mavonEditor) 
app.use(dayjs)
app.use(TeaDesign)
// app.config.globalProperties.$dayjs = dayjs
app.use(router)

app.mount('#app')
