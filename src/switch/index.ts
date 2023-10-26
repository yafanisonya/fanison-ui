import { App } from 'vue'
import Switch from './switch'

export { Switch }

export default {
  install(app: App) {
    app.component('FSwitch', Switch)
  }
}
