import { App } from 'vue'
import Select from './select'

export { Select }

export default (app: App): void => {
  app.component('FSelect', Select)
}
