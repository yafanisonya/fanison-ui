import { createApp } from 'vue'
import './index.scss'
import '../styles/icon/iconfont.css'
import '../styles/icon/iconfont.js'
import App from './App.vue'
import Button from './button'
import Pagination from './pagination'
import Icon from './icon'
import ArrowDownIcon from './icon/arrow-down'

createApp(App)
  .use(Button)
  .use(Pagination)
  .use(Icon)
  .use(ArrowDownIcon)
  .mount('#app')
