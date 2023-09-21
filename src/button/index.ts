import { App } from 'vue'
import Button from './src/button'

export { Button }

export default {
  install(app: App): void {
    app.component(Button.name, Button)
  }
}
