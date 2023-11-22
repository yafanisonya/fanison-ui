import { App } from 'vue'
import Card from './card'

export { Card }

export default {
  install(app: App): void {
    app.component('FCard', Card)
  }
}
