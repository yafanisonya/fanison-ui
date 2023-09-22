import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-type'

export default defineComponent({
  name: 'FButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, round, loading } = toRefs(props)
    const span = loading.value ? <span class="s-btn-loading"></span> : null

    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      const isRound = round.value ? 'is-round' : ''
      return (
        <button
          disabled={disabled.value || loading.value}
          class={`s-btn s-btn--${type.value} s-btn--${size.value} ${isRound}`}
        >
          {span}
          {defaultSlot}
        </button>
      )
    }
  }
})
