import { createApp } from 'vue'
import './style/index.scss'
import '../styles/icon/iconfont.css'
import '../styles/icon/iconfont.js'
import App from './App.vue'
import Button from './button'
import Pagination from './pagination'
import Icon from './icon'
import Tab from './tab/'
import Tabs from './tab'
import ArrowDownIcon from './icon/arrow-down'
import Dialog from './dialog'
import Input from './input'

createApp(App)
  .use(Button)
  .use(Pagination)
  .use(Icon)
  .use(ArrowDownIcon)
  .use(Tab)
  .use(Tabs)
  .use(Dialog)
  .use(Input)
  .mount('#app')
