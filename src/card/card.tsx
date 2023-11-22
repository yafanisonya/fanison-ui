import { defineComponent, toRefs } from 'vue'
import { CardProps, cardProps } from './card-type'
import './card.scss'

export default defineComponent({
  name: 'FCard',
  props: cardProps,
  setup(props: CardProps, { slots }) {
    const { shadow } = toRefs(props)
    const headerVisible = slots.header && slots.header()

    return () => (
      <div class={['s-card', shadow.value ? `is-${shadow.value}-shadow` : '']}>
        {headerVisible && <div class="s-card__header">{slots.header?.()}</div>}
        <div class="s-card__body">{slots.default?.()}</div>
      </div>
    )
  }
})
