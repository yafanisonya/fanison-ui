import type { PropType, ExtractPropTypes } from 'vue'

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => []
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

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
