import { defineComponent } from 'vue'
import './header.scss'

export default defineComponent({
  name: 'FHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  setup(props, { slots }) {
    return () => (
      <header class="s-header" style={{ height: props.height }}>
        {slots.default?.()}
      </header>
    )
  }
})
