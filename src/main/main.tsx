import { defineComponent } from 'vue'
import './main.scss'

export default defineComponent({
  name: 'FMain',
  setup(props, { slots }) {
    return () => <main class="s-main">{slots.default?.()}</main>
  }
})
