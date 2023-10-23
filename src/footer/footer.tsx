import { defineComponent } from 'vue'
import './footer.scss'

export default defineComponent({
  name: 'FFooter',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  setup(props, { slots }) {
    return () => (
      <footer class="s-footer" style={{ height: props.height }}>
        {slots.default?.()}
      </footer>
    )
  }
})
