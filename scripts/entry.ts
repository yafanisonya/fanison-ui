import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'
import PaginationPlugin, { Pagination } from '../src/pagination'
import IconPlugin, { Icon } from '../src/icon'
import TabPlugin, { Tab, Tabs } from '../src/tab'
import DialogPlugin, { Dialog } from '../src/dialog'
import InputPlugin, { Input } from '../src/input'
import ContainerPlugin, { Container } from '../src/container'
import HeaderPlugin, { Header } from '../src/header'
import AsidePlugin, { Aside } from '../src/aside'
import MainPlugin, { Main } from '../src/main/index'
import FooterPlugin, { Footer } from '../src/footer'
import CheckBoxPlugin, { Checkbox } from '../src/checkbox/'
import CheckBoxGroupPlugin, { CheckboxGroup } from '../src/checkbox-group'
import RadioPlugin, { Radio } from '../src/radio'
import RadioGroupPlugin, { RadioGroup } from '../src/radio-group'

export {
  Button,
  Pagination,
  Icon,
  Tab,
  Tabs,
  Dialog,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup
}

const installs = [
  ButtonPlugin,
  PaginationPlugin,
  IconPlugin,
  TabPlugin,
  DialogPlugin,
  InputPlugin,
  ContainerPlugin,
  HeaderPlugin,
  AsidePlugin,
  MainPlugin,
  FooterPlugin,
  CheckBoxPlugin,
  CheckBoxGroupPlugin,
  RadioPlugin,
  RadioGroupPlugin
]

export default {
  install(app: App): void {
    installs.forEach(plugin => {
      app.use(plugin)
    })
  }
}
