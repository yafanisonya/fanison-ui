import { defineComponent, provide, toRefs } from 'vue'
import { CollapseProps, collapseProps } from './collapse-type'
import './collapse.scss'

export default defineComponent({
  name: 'FCollapse',
  props: collapseProps,
  emits: ['update:modelValue'],
  setup(props: CollapseProps, { slots, emit }) {
    const { modelValue, accordion } = toRefs(props)
    provide('collapse-modelValue', modelValue)
    provide('collapse-accordion', accordion)

    const updateModelValue = (value: string[]) => {
      emit('update:modelValue', value)
      modelValue.value = value
    }
    provide('updateModelValue', updateModelValue)

    return () => <div class="s-collapse">{slots.default?.()}</div>
  }
})
