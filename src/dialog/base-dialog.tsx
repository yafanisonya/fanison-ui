import { defineComponent, toRefs } from 'vue'
import './base-dialog.scss'

export default defineComponent({
  name: 'FBaseDialog',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const { modelValue } = toRefs(props)
    return () => (
      <div>
        {modelValue.value && (
          <div class="s-base-modal">
            <div
              class="s-base-modal__mask"
              onClick={() => {
                emit('update:modelValue', false)
              }}
            ></div>
            {slots.default?.()}
          </div>
        )}
      </div>
    )
  }
})
