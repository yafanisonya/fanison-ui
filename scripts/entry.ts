import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'
import PaginationPlugin, { Pagination } from '../src/pagination'
import IconPlugin, { Icon } from '../src/icon'

export { Button, Pagination, Icon }

const installs = [ButtonPlugin, PaginationPlugin, IconPlugin]

export default {
  install(app: App): void {
    installs.forEach(plugin => {
      app.use(plugin)
    })
  }
}
