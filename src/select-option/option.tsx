import { defineComponent, onMounted, inject, Ref } from 'vue'
import { optionProps, OptionProps } from './option-type'
import '../select/select.scss'

export default defineComponent({
  name: 'FOption',
  props: optionProps,
  emits: ['update:modelValue'],
  setup(props: OptionProps, { slots }) {
    const updateModelValue = inject('updateModelValue', null) as unknown as (
      value: string | number | undefined
    ) => void

    const selectedValue = inject('selected-value') as Ref<
      string | number | undefined
    >

    const options = inject('options') as Ref<
      Array<{
        label: string | number | undefined
        value: string | number | undefined
      }>
    >
    onMounted(() => {
      options.value.push({
        label: props.label,
        value: props.value
      })
    })

    const handleSelectItem = () => {
      if (props.disabled) return
      selectedValue.value = props.value
      updateModelValue(props.value)
    }

    return () => (
      <div
        class={[
          's-select-dropdown__item',
          props.disabled ? 'is-disabled' : '',
          selectedValue.value === props.value ? 'selected' : ''
        ]}
        onClick={() => handleSelectItem()}
      >
        {slots.default?.() || <span>{props.label}</span>}
      </div>
    )
  }
})
