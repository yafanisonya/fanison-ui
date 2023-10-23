import { App } from 'vue'
import Header from './header'

export { Header }

export default {
  install(app: App) {
    app.component('FHeader', Header)
  }
}
