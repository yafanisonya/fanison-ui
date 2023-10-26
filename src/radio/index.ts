import { App } from 'vue'
import Radio from './radio'

export { Radio }

export default {
  install(app: App) {
    app.component('FRadio', Radio)
  }
}
