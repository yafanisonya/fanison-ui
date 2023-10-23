import { App } from 'vue'
import Main from './main'

export { Main }

export default {
  install(app: App) {
    app.component('FMain', Main)
  }
}
