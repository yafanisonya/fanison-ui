import { defineComponent, ref, toRefs, computed, onMounted, watch } from 'vue'
import { PaginationProps, paginationProps } from './pagination-type'
import '../style/pagination.scss'

import FPager from './components/pager'
export default defineComponent({
  name: 'FPagination',
  props: paginationProps,
  emits: ['update:currentPage', 'update:pageSize'],
  setup(props: PaginationProps, { emit }) {
    const pager = ref()
    const disablePrev = computed(() => {
      return pager.value ? pager.value.currentPage < 2 : true
    })
    const disableNext = computed(() => {
      return pager.value
        ? pager.value.currentPage >= pager.value.totalPage
        : true
    })
    const { hideOnSinglePage } = toRefs(props)
    const hideStatus = hideOnSinglePage.value
    onMounted(() => {
      watch(
        () => props.pageSize,
        newVal => {
          pager.value.pageSize = newVal
        }
      )
    })
    return () => {
      const left = ref('<')
      const right = ref('>')

      return hideStatus && pager.value && pager.value.totalPage === 1 ? null : (
        <div class="s-pagination">
          <button
            onClick={() => pager.value.prevPage()}
            disabled={disablePrev.value}
          >
            {left.value}
          </button>
          <FPager ref={pager} {...props}></FPager>
          <button
            onClick={() => pager.value.nextPage()}
            disabled={disableNext.value}
          >
            {right.value}
          </button>
        </div>
      )
    }
  }
})
