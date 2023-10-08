import { computed, defineComponent, toRefs } from 'vue'
import usePage from '../composables/use-page'
import { getCenterPage } from '../utils'
import { PagerProps, pagerProps } from './pager-type'

export default defineComponent({
  name: 'FPager',
  props: pagerProps,
  emits: [],
  setup(props: PagerProps) {
    const { total, pageSize, pagerCount } = toRefs(props)
    const { currentPage, setPage, jumpPage, prevPage, nextPage } = usePage(
      props.currentPage
    )

    const totalPage = computed(() => {
      return Math.ceil(total.value / pageSize.value)
    })
    const centerPages = computed(() => {
      return getCenterPage(totalPage.value, currentPage.value, pagerCount.value)
    })

    return {
      totalPage,
      centerPages,
      currentPage,
      setPage,
      jumpPage,
      prevPage,
      nextPage
    }
  },
  render() {
    const {
      pagerCount,
      totalPage,
      centerPages,
      currentPage,
      setPage,
      jumpPage
    } = this
    return (
      <ul class="s-pager">
        <li onClick={() => setPage(1)} class={{ current: currentPage === 1 }}>
          1
        </li>
        {/* 1.总页码totalPage大于按钮数量pagerCount */}
        {/* 2.当中间页码大于Math.ceil(pagerCount / 2)时，应该出现左边的 ... */}
        {totalPage > pagerCount && currentPage > Math.ceil(pagerCount / 2) && (
          <li class="more left" onClick={() => jumpPage(-5)}>
            ...
          </li>
        )}
        {/* 总页面totalPage，当前页面currentPage，最大显示页码数pageCount */}
        {centerPages.map(page => (
          <li
            onClick={() => setPage(page)}
            class={{ current: currentPage === page }}
          >
            {page}
          </li>
        ))}

        {/* 1.总页码totalPage大于按钮数量pagerCount */}
        {/* 2.当中间页码小于pagerCount - Math.ceil(pagerCount / 2) + 1时，应该出现左边的 ... */}
        {totalPage > pagerCount &&
          currentPage < totalPage - Math.ceil(pagerCount / 2) + 1 && (
            <li class="more right" onClick={() => jumpPage(5)}>
              ...
            </li>
          )}

        {totalPage > 1 && (
          <li
            onClick={() => setPage(totalPage)}
            class={{ current: currentPage === totalPage }}
          >
            {totalPage}
          </li>
        )}
      </ul>
    )
  }
})
