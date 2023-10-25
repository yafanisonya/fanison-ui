import { App } from 'vue'
import Checkbox from './checkbox'

export { Checkbox }

export default {
  install(app: App) {
    app.component('FCheckbox', Checkbox)
  }
}
