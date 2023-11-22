import type { PropType, ExtractPropTypes } from 'vue'

export const collapseProps = {
  modelValue: {
    type: [String, Array] as PropType<string | Array<string>>,
    default: () => []
  },
  accordion: {
    type: Boolean,
    default: false
  }
} as const

export type CollapseProps = ExtractPropTypes<typeof collapseProps>
