import { defineComponent, provide, toRefs } from 'vue'

import { radioGroupProps, RadioGroupProps } from './radio-group-type'
import './radio-group.scss'

export default defineComponent({
  name: 'FRadioGroup',
  props: radioGroupProps,
  emits: ['update:modelValue'],
  setup(props: RadioGroupProps, { slots, emit }) {
    const { modelValue, disabled, size } = toRefs(props)

    provide('group-size', size)
    provide('group-disabled', disabled)
    provide('group-value', modelValue)

    const updateModelValue = (value: string) => {
      emit('update:modelValue', value)
    }
    provide('updateGroupValue', updateModelValue)

    return () => <div class="s-radio-group">{slots.default?.()}</div>
  }
})
