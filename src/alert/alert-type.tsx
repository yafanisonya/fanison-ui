import type { PropType, ExtractPropTypes } from 'vue'

export const alertProps = {
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String as PropType<'success' | 'warning' | 'info' | 'error'>,
    default: 'info'
  },
  closable: {
    type: Boolean,
    default: true
  },
  effect: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light'
  },
  closeText: {
    type: String,
    default: ''
  },
  center: {
    type: Boolean,
    default: false
  }
} as const

export type AlertProps = ExtractPropTypes<typeof alertProps>
