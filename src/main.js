import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import axios from "axios"

//axios.defaults.baseURL = 'http://localhost:8000/api/';
 axios.defaults.baseURL = 'http://consultation.test/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json'


// createApp(App).mount('#app')
createApp(App).use(store).use(router).mount('#app')