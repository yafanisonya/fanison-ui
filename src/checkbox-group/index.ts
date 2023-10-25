import { App } from 'vue'
import CheckboxGroup from './checkbox-group'

export { CheckboxGroup }

export default {
  install(app: App) {
    app.component('FCheckboxGroup', CheckboxGroup)
  }
}
