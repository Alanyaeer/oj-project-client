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

const app = createApp(App)
app.use(createPinia().use(persist))
app.use(mavonEditor) 
app.use(TeaDesign)
app.use(router)

app.mount('#app')
