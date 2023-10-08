import { ref } from 'vue'

export default function usePage(defaultCurrentPage = 1) {
  const currentPage = ref(defaultCurrentPage)
  const setPage = (page: number) => {
    currentPage.value = page
  }
  const jumpPage = (page: number) => {
    currentPage.value += page
  }

  const prevPage = () => {
    jumpPage(-1)
  }

  const nextPage = () => {
    jumpPage(1)
  }

  return {
    currentPage,
    setPage,
    jumpPage,
    prevPage,
    nextPage
  }
}
