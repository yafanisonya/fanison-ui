import { App } from 'vue'
import Alert from './alert'

export { Alert }

export default {
  install(app: App) {
    app.component('FAlert', Alert)
  }
}
