import { App } from 'vue'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

export { Collapse, CollapseItem }

export default {
  install(app: App): void {
    app.component('FCollapse', Collapse)
    app.component('FCollapseItem', CollapseItem)
  }
}
