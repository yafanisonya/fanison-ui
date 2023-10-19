import type { PropType, ExtractPropTypes } from 'vue'

export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<'text' | 'password'>,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  maxlength: {
    type: String,
    default: ''
  },
  clearable: {
    type: Boolean,
    default: false
  }
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>
