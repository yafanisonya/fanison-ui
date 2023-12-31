import { createApp } from 'vue'
import router from './router'
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
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import Alert from './alert'
import Breadcrumb from './breadcrumb'
import BreadcrumbItem from './breadcrumb/'
import Badge from './badge'
import Collapse from './collapse'
import CollapseItem from './collapse/'
import Card from './card'
import Select from './select'
import Option from './select-option'

createApp(App)
  .use(router)
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
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Radio)
  .use(RadioGroup)
  .use(Switch)
  .use(Alert)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Badge)
  .use(Collapse)
  .use(CollapseItem)
  .use(Card)
  .use(Select)
  .use(Option)
  .mount('#app')
