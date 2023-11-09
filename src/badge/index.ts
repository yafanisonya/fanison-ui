import { App } from 'vue'
import Badge from './badge'

export { Badge }
export default {
  install(app: App): void {
    app.component('FBadge', Badge)
  }
}
