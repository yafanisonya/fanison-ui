import { App } from 'vue'
import Dialog from './dialog'

export { Dialog }
export default {
  install: (app: App) => {
    app.component('FDialog', Dialog)
  }
}
