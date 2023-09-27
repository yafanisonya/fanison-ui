import { defineComponent, watch, PropType, ref, toRefs, nextTick } from 'vue'
import BasePopover from '../base-popover/base-popover'
import { Placement } from '@floating-ui/dom'

import './popover.scss'

export default defineComponent({
  name: 'FPopover',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    host: {
      type: Object as PropType<HTMLElement>,
      default: () => null
    },
    title: {
      type: String,
      default: ''
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom'
    }
  },

  emits: ['update:visible'],
  setup(props, { slots }) {
    const { visible, title } = toRefs(props)
    return () => (
      <>
        {visible.value && (
          <BasePopover class="s-popover" {...props}>
            <h4 class="s-popover__title">{title.value}</h4>
            {slots.default?.()}
          </BasePopover>
        )}
      </>
    )
  }
})
