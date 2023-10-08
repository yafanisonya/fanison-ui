import { createApp } from 'vue'
import './index.scss'
import App from './App.vue'
import Button from './button'
import Pagination from './pagination'

createApp(App).use(Button).use(Pagination).mount('#app')
