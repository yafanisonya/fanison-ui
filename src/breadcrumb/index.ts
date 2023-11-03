import { App } from 'vue'
import Breadcrumb from './breadcrumb'
import BreadcrumbItem from './breadcrumb-item'

export { Breadcrumb, BreadcrumbItem }
export default {
  install(app: App): void {
    app.component('FBreadcrumb', Breadcrumb)
    app.component('FBreadcrumbItem', BreadcrumbItem)
  }
}
