import { App } from 'vue'
import Footer from './footer'

export { Footer }

export default {
  install(app: App) {
    app.component('FFooter', Footer)
  }
}
