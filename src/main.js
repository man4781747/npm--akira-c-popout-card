import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { install as PopoutCard } from 'akira-c-popout-card'

createApp(App).use(PopoutCard).mount('#app')
