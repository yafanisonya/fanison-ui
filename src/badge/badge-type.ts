import type { PropType, ExtractPropTypes } from 'vue'

export const badgeProps = {
  value: {
    type: [Number, String] as PropType<number | string>,
    default: ''
  },
  type: {
    type: String as PropType<
      'primary' | 'success' | 'warning' | 'danger' | 'info'
    >,
    default: 'danger'
  },
  max: {
    type: Number as PropType<number>,
    default: 99
  },
  isDot: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  hidden: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
