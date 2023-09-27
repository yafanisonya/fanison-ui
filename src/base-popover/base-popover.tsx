import {
  defineComponent,
  watch,
  PropType,
  ref,
  toRefs,
  nextTick,
  onUnmounted
} from 'vue'

import {
  computePosition,
  arrow,
  offset,
  Placement,
  autoPlacement
} from '@floating-ui/dom'

export default defineComponent({
  name: 'FBasePopover',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    host: {
      type: Object as PropType<HTMLElement>,
      default: () => null
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
  setup(props, { slots, attrs }) {
    const { host: hostRef, visible, showArrow, placement } = toRefs(props)

    const arrowRef = ref()
    const overlayRef = ref()

    const updatePosition = () => {
      const middleware = []
      if (showArrow.value) {
        middleware.push(offset(8))
        middleware.push(arrow({ element: arrowRef.value }))
      }

      if (!placement.value) {
        middleware.push(autoPlacement())
      }

      computePosition(hostRef.value, overlayRef.value, {
        middleware,
        placement: placement.value || 'bottom'
      }).then(({ x, y, middlewareData, placement }) => {
        Object.assign(overlayRef.value.style, {
          left: x + 'px',
          top: y + 'px'
        })

        if (showArrow.value) {
          const { x: arrowX, y: arrowY } = middlewareData.arrow!
          const currentSide = placement.split('-')[0]
          const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right'
          }[currentSide]
          const SIDE = ['top', 'right', 'bottom', 'left']

          const prevIndex = SIDE.indexOf(currentSide) - 1
          const nextSide = SIDE[prevIndex < 0 ? prevIndex + 4 : prevIndex]
          Object.assign(arrowRef.value.style, {
            left: arrowX + 'px',
            top: arrowY + 'px',
            [staticSide!]: '-4px',
            [`border-${currentSide}-color`]: 'transparent',
            [`border-${nextSide}-color`]: 'transparent'
          })
        }
      })
    }

    const mutationObserver = new MutationObserver(() => updatePosition())

    watch(
      visible,
      newVal => {
        if (newVal) {
          nextTick(updatePosition)
          hostRef.value &&
            mutationObserver.observe(hostRef.value, { attributes: true })
          window.addEventListener('resize', updatePosition)
          window.addEventListener('scroll', updatePosition)
        } else {
          mutationObserver.disconnect()
          window.removeEventListener('resize', updatePosition)
          window.removeEventListener('scroll', updatePosition)
        }
      },
      {
        immediate: true
      }
    )

    onUnmounted(() => {
      mutationObserver.disconnect()
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    })

    return () => (
      <>
        {visible.value && (
          <div ref={overlayRef} class="s-base-popover" {...attrs}>
            {slots.default?.()}
            {showArrow.value && (
              <div class="s-base-popover_arrow" ref={arrowRef}></div>
            )}
          </div>
        )}
      </>
    )
  }
})
