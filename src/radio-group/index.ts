import { App } from 'vue'
import RadioGroup from './radio-group'

export { RadioGroup }

export default (app: App): void => {
  app.component('FRadioGroup', RadioGroup)
}
