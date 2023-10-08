import { App } from 'vue'
import Pagination from './src/pagination'

export { Pagination }
export default {
  install(app: App): void {
    app.component(Pagination.name, Pagination)
  }
}
