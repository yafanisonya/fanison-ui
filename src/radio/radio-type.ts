import type { PropType, ExtractPropTypes } from 'vue'

export const radioProps = {
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  label: {
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
  },
  border: {
    type: Boolean,
    default: false
  }
} as const

export type RadioProps = ExtractPropTypes<typeof radioProps>
