import type { PropType, ExtractPropTypes } from 'vue'

export const radioGroupProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: 'default'
  }
} as const

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
