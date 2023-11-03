import type { PropType, ExtractPropTypes } from 'vue'

export const breadcrumbProps = {
  separator: {
    type: String as PropType<string>,
    default: '/'
  },
  separatorIcon: {
    type: String || null,
    default: null
  }
} as const

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
