import { App } from 'vue'
import Container from './container'

export { Container }

export default {
  install(app: App) {
    app.component('FContainer', Container)
  }
}
