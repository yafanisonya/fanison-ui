import { defineComponent } from 'vue'
import './container.scss'

export default defineComponent({
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  setup(props, { slots }) {
    const slotsDefault = slots.default?.()
    const hasHeader = slotsDefault?.some(
      (vnode: any) => vnode.type.name === 'FHeader'
    )
    const hasFooter = slotsDefault?.some(
      (vnode: any) => vnode.type.name === 'FFooter'
    )
    return () => (
      <section
        class={[
          's-container',
          props.direction === 'vertical' || hasHeader || hasFooter
            ? 'is-vertical'
            : ''
        ]}
      >
        {slots.default?.()}
      </section>
    )
  }
})
