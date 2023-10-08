import type { ExtractPropTypes } from 'vue'

export const paginationProps = {
  total: {
    type: Number,
    default: 0
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  pageSize: {
    type: Number,
    default: 10
  },
  currentPage: {
    type: Number,
    default: 1
  },
  hideOnSinglePage: {
    type: Boolean,
    default: false
  }
} as const

export type PaginationProps = ExtractPropTypes<typeof paginationProps>
