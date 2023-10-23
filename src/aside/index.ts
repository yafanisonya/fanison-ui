import { App } from 'vue'
import Aside from './aside'

export { Aside }

export default {
  install(app: App) {
    app.component('FAside', Aside)
  }
}
