import { defineComponent, provide, toRefs, watch, ref } from 'vue'
import { checkboxGroupProps, CheckboxGroupProps } from './checkbox-group-type'
import './checkbox-group.scss'

export default defineComponent({
  name: 'FCheckboxGroup',
  props: checkboxGroupProps,
  emits: ['update:modelValue'],
  setup(props: CheckboxGroupProps, { slots, emit }) {
    const { modelValue, disabled, size } = toRefs(props)

    provide('group-size', size)
    provide('group-disabled', disabled)
    provide('group-value', modelValue)

    const updateModelValue = (value: string[]) => {
      emit('update:modelValue', value)
      modelValue.value = value
    }
    provide('updateGroupValue', updateModelValue)

    return () => <div class="s-checkbox-group">{slots.default?.()}</div>
  }
})
