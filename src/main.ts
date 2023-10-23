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
import Container from './container'
import Header from './header'
import Aside from './aside'
import Main from './main/index.js'
import Footer from './footer'

createApp(App)
  .use(Button)
  .use(Pagination)
  .use(Icon)
  .use(ArrowDownIcon)
  .use(Tab)
  .use(Tabs)
  .use(Dialog)
  .use(Input)
  .use(Container)
  .use(Header)
  .use(Aside)
  .use(Main)
  .use(Footer)
  .mount('#app')
