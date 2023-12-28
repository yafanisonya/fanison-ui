import { App } from 'vue'
import Option from './option'

export { Option }

export default (app: App): void => {
  app.component('FOption', Option)
}
