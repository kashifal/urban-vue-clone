import { createApp } from 'vue'
 
import App from './App.vue'
import router from './router'
import { motionPlugin } from '@oku-ui/motion'

import './style.css'

const app = createApp(App)
app.use(router)
app.use(motionPlugin)
app.mount('#app')
