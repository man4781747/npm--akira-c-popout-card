import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PopoutCard from './components/PopoutCard'
// import PopoutCard from 'akira-c-uploadtest'

createApp(App).use(PopoutCard).mount('#app')
