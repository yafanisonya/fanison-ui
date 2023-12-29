import type { PropType, ExtractPropTypes } from 'vue'

export const selectProps = {
  modelValue: {
    type: [String, Number, Array] as PropType<string | number | string[]>,
    default: ''
  },
  multiple: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: 'Select'
  },
  size: {
    type: String as PropType<'small' | 'default' | 'large'>,
    default: 'default'
  }
} as const

export type SelectProps = Partial<ExtractPropTypes<typeof selectProps>>
