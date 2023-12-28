import { defineComponent, ref, provide } from 'vue'
import { selectProps, SelectProps } from './select-type'
import './select.scss'

export default defineComponent({
  name: 'FSelect',
  props: selectProps,
  emits: ['update:modelValue'],
  setup(props: SelectProps, { slots, emit }) {
    const options = ref<
      Array<{
        label: string | number
        value: string | number
      }>
    >([])
    provide('options', options)

    const selectedValue = ref(props.modelValue)
    provide('selected-value', selectedValue)

    const optionsVisible = ref(false)
    const updateModelValue = (value: string | number) => {
      emit('update:modelValue', value)
      optionsVisible.value = false
    }
    provide('updateModelValue', updateModelValue)

    const showOption = () => {
      if (props.disabled) return
      optionsVisible.value = !optionsVisible.value
    }

    return () => (
      <div class={['s-select', props.size ? `s-select--${props.size}` : '']}>
        <div class="select-trigger" onClick={() => showOption()}>
          <div
            class={[
              's-input',
              props.size ? `s-input--${props.size}` : '',
              props.disabled ? 'is-disabled' : ''
            ]}
          >
            <div class="s-input__wrapper">
              <input
                type="text"
                class="s-input__inner"
                readonly
                placeholder={props.placeholder}
                value={props.modelValue}
                disabled={props.disabled}
              />
              <f-icon
                name="arrowdown"
                class={[optionsVisible.value ? 'is-reverse' : '']}
              ></f-icon>
            </div>
          </div>
        </div>
        {optionsVisible.value && (
          <div class="s-select-dropdown__wrap">
            <ul class="s-select-dropdown__list">{slots.default?.()}</ul>
          </div>
        )}
      </div>
    )
  }
})
