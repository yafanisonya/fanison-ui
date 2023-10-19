import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'
import PaginationPlugin, { Pagination } from '../src/pagination'
import IconPlugin, { Icon } from '../src/icon'
import TabPlugin, { Tab, Tabs } from '../src/tab'
import DialogPlugin, { Dialog } from '../src/dialog'
import InputPlugin, { Input } from '../src/input'

export { Button, Pagination, Icon, Tab, Tabs, Dialog, Input }

const installs = [
  ButtonPlugin,
  PaginationPlugin,
  IconPlugin,
  TabPlugin,
  DialogPlugin,
  InputPlugin
]

export default {
  install(app: App): void {
    installs.forEach(plugin => {
      app.use(plugin)
    })
  }
}
