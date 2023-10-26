import { defineComponent, computed, inject, Ref } from 'vue'
import { RadioProps, radioProps } from './radio-type'
import './radio.scss'

export default defineComponent({
  name: 'FRadio',
  props: radioProps,
  emits: ['update:modelValue'],
  setup(props: RadioProps, { slots, emit }) {
    const groupSize = inject('group-size', '') as unknown as Ref<string>
    const groupDisabled = inject(
      'group-disabled',
      false
    ) as unknown as Ref<boolean>
    const groupValue = inject('group-value', '') as unknown as Ref<string>

    const updateGroupValue = inject('updateGroupValue', null) as unknown as (
      value: string | number
    ) => void

    const checkStauts = computed(() => {
      return (
        props.modelValue === props.label || groupValue.value === props.label
      )
    })

    const disableStauts = computed(() => {
      return groupDisabled.value || props.disabled
    })

    const sizeStauts = computed(() => {
      return groupSize.value || props.size
    })

    const updateModelValue = () => {
      emit('update:modelValue', props.label)
      if (!groupValue.value) return
      updateGroupValue(props.label)
    }

    return () => (
      <label
        class={[
          's-radio',
          checkStauts.value ? 'is-checked' : '',
          disableStauts.value ? 'is-disabled' : '',
          props.border ? 'is-bordered' : '',
          sizeStauts.value ? `s-radio--${sizeStauts.value}` : ''
        ]}
      >
        <span
          class={[
            's-radio__input',
            checkStauts.value ? 'is-checked' : '',
            disableStauts.value ? 'is-disabled' : ''
          ]}
        >
          <input
            type="radio"
            class="s-radio__original"
            checked={checkStauts.value}
            disabled={disableStauts.value}
            onChange={() => {
              updateModelValue()
            }}
          />
          <span class="s-radio__inner"></span>
        </span>
        <span class="s-radio__label">{slots.default?.()}</span>
      </label>
    )
  }
})
