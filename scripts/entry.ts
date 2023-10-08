import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/button'
import PaginationPlugin, { Pagination } from '../src/pagination'

export { Button, Pagination }

const installs = [ButtonPlugin, PaginationPlugin]

export default {
  install(app: App): void {
    installs.forEach(plugin => {
      app.use(plugin)
    })
  }
}
