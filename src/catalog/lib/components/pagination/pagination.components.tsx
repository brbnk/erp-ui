import style from './pagination.module.scss'
import Controls from './controls/controls.components'
import { SelectedPage } from '../../hooks/usePagination'

interface PageProps {
  pageNum: number,
  selected: SelectedPage,
  action: (pageNum: number) => void
}

interface PaginationProps {
  emitChange: (num: number) => void,
  pageRange: Array<number>,
  total: number,
  selected: SelectedPage
}

const PageNumbers = ({ pageNum, selected, action }: PageProps) => (
  <span
    className={ selected.page == pageNum ? style.selected : '' }
    onClick={() => action(pageNum)}
  >
    {pageNum}
  </span>
)

const Pagination = ({ emitChange, pageRange, total, selected }: PaginationProps) => {
  const selectPageAction = (number: number) => {
    if (number == selected.page) return
    emitChange(number)
  }

  const moveToPreviousPage = () => {
    if (selected.page == 1) return
    const previousPage = selected.page - 1
    selectPageAction(previousPage)
  }

  const moveToNextPage = () => {
    if (selected.page == pageRange.length) return
    const nextPage = selected.page + 1
    selectPageAction(nextPage)
  }

  const moveToFirstPage = () => {
    selectPageAction(1)
  }

  const moveToLastPage = () => {
    selectPageAction(pageRange.length)
  }

  return (
    <Controls
      prev={ moveToPreviousPage }
      next={ moveToNextPage }
      first={ moveToFirstPage }
      last={ moveToLastPage }
      total={ total }
      selected={ selected }
    >
      <div className={style.pagination}>
        {
          pageRange.map((_, index) => (
            <PageNumbers
              pageNum={ index + 1 }
              selected={ selected }
              action={ selectPageAction }
              key={index}
            />
          ))
        }
      </div>
    </Controls>
  )
}

export default Pagination