import type { PropType, ExtractPropTypes } from 'vue'

export const switchProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<'large' | 'default' | 'small'>,
    default: 'default'
  },
  activeText: {
    type: String,
    default: ''
  },
  inactiveText: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  }
} as const

export type SwitchProps = ExtractPropTypes<typeof switchProps>
