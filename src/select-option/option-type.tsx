import type { PropType, ExtractPropTypes } from 'vue'

export const optionProps = {
  label: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  value: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type OptionProps = Partial<ExtractPropTypes<typeof optionProps>>
