import style from './pagination.module.scss'
import { useState } from 'react'

import Controls from './controls/controls.components'

type PageProps = {
  pageNum: number,
  selected: number,
  action: (pageNum: number) => void
}

type PaginationProps = {
  emitChange: (num: number) => void,
  pageRange: Array<number>
}

const Page = ({ pageNum, selected, action }: PageProps) => (
  <span
    className={ selected == pageNum ? style.selected : '' }
    onClick={() => action(pageNum)}
  >
    {pageNum}
  </span>
)

const Pagination = ({ emitChange, pageRange }: PaginationProps) => {
  const [ selectedPage, setSelectedPage ] = useState(1)

  const selectPageAction = (number: number) => {
    setSelectedPage(number)
    emitChange(number)
  }

  const moveToPreviousPage = () => {
    if (selectedPage == 1) return
    const previousPage = selectedPage - 1
    selectPageAction(previousPage)
  }

  const moveToNextPage = () => {
    if (selectedPage == pageRange.length) return
    const nextPage = selectedPage + 1
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
    >
      <div className={style.pagination}>
        {
          pageRange.map((_, index) => (
            <Page
              pageNum={ index + 1 }
              selected={ selectedPage }
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