import { App } from 'vue'
import Tab from './tab'
import Tabs from './tabs'

export { Tab, Tabs }
export default {
  install(app: App) {
    app.component('FTab', Tab)
    app.component('FTabs', Tabs)
  }
}
