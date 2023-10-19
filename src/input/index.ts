import { App } from 'vue'
import Input from './src/input'
export { Input }
export default {
  install: (app: App): void => {
    app.component('FInput', Input)
  }
}
