import { defineComponent } from 'vue'
import './aside.scss'

export default defineComponent({
  name: 'FAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  },
  setup(props, { slots }) {
    return () => (
      <aside class="s-aside" style={{ width: props.width }}>
        {slots.default?.()}
      </aside>
    )
  }
})
