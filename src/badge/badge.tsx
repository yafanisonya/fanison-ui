import { defineComponent, computed } from 'vue'
import { badgeProps, BadgeProps } from './badge-type'
import './badge.scss'

export default defineComponent({
  name: 'FBadge',
  props: badgeProps,
  setup(props: BadgeProps, { slots }) {
    const value = props.value || ''
    const type = props.type || 'danger'
    const max = props.max || 99
    const isDot = props.isDot || false

    const showValue = computed(() => {
      if (typeof value === 'number') {
        return value < max ? value : max + '+'
      }
      return value
    })

    return () => (
      <div class="s-badge">
        {slots.default?.()}
        <sup
          class={[
            's-badge__content',
            `s-badge__content--${type}`,
            'is-fixed',
            { 'is-dot': isDot }
          ]}
        >
          {showValue.value}
        </sup>
      </div>
    )
  }
})
