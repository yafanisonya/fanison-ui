import type { PropType, ExtractPropTypes } from 'vue'

export const checkboxProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  label: {
    type: String as PropType<string>,
    default: ''
  },
  size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: 'default'
  },
  border: {
    type: Boolean,
    default: false
  }
} as const

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
