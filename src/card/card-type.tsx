import type { PropType, ExtractPropTypes } from 'vue'

export const cardProps = {
  header: {
    type: String,
    default: ''
  },
  // bodyStyle: {
  //   type: Object as PropType<Record<string, any>>,
  //   default: () => ({})
  // },
  shadow: {
    type: String as PropType<'always' | 'hover' | 'never'>,
    default: 'always'
  }
} as const

export type CardProps = ExtractPropTypes<typeof cardProps>
