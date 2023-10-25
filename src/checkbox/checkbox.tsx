import { defineComponent, inject, Ref, ref, computed } from 'vue'
import { CheckboxProps, checkboxProps } from './checkbox-type'
import './checkbox.scss'

export default defineComponent({
  name: 'FCheckbox',
  props: checkboxProps,
  emits: ['update:modelValue'],
  setup(props: CheckboxProps, { slots, emit }) {
    const groupSize = inject('group-size', '') as unknown as Ref<string>
    const groupDisabled = inject(
      'group-disabled',
      false
    ) as unknown as Ref<boolean>

    const groupValue = inject('group-value', []) as unknown as Ref<
      Array<string>
    >
    const groupChecked = ref(false)
    if (groupValue.value && groupValue.value.length > 0) {
      groupValue.value.forEach(item => {
        if (item === props.label) {
          groupChecked.value = true
        }
      })
    }

    const updateGroupValue = inject('updateGroupValue', null) as unknown as (
      value: string[]
    ) => void

    const updateModelValue = (value: boolean) => {
      emit('update:modelValue', value)
      if (groupValue.value) {
        if (groupChecked.value) {
          const value = groupValue.value.filter(item => item !== props.label)
          updateGroupValue(value)
          groupChecked.value = false
        } else {
          const value = groupValue.value
          value.push(props.label)
          groupChecked.value = true
          updateGroupValue(value)
        }
      }
    }

    const disableStauts = computed(() => {
      return groupDisabled.value || props.disabled
    })
    const checkStauts = computed(() => {
      return groupChecked.value || props.modelValue
    })
    const sizeStauts = computed(() => {
      return groupSize.value || props.size
    })

    return () => (
      <label
        class={[
          's-checkbox',
          checkStauts.value ? 'is-checked' : '',
          disableStauts.value ? 'is-disabled' : '',
          props.border ? 'is-bordered' : '',
          sizeStauts.value ? `s-checkbox--${sizeStauts.value}` : ''
        ]}
      >
        <span
          class={[
            's-checkbox__input',
            checkStauts.value ? 'is-checked' : '',
            disableStauts.value ? 'is-disabled' : ''
          ]}
        >
          <input
            class="s-checkbox__original"
            type="checkbox"
            checked={checkStauts.value}
            disabled={disableStauts.value}
            onChange={e => updateModelValue(e.target.checked)}
          />
          <span class="s-checkbox__inner"></span>
        </span>
        <span
          class={[
            's-checkbox__label',
            disableStauts.value ? 'is-disabled' : ''
          ]}
        >
          {props.label || slots.default?.()}
        </span>
      </label>
    )
  }
})
