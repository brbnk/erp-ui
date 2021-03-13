import style from './pagination.module.scss'
import { useState } from 'react'

import Controls from './controls/controls.components'

const pageRange = [ 1, 2, 3, 4 ]

const Page = ({ pageNum, selected, action }) => (
  <span
    className={ selected == pageNum ? style.selected : '' }
    onClick={() => action(pageNum)}
  > {pageNum} </span>
)

const Pagination = ({ change }) => {
  const [ selectedPage, setSelectedPage ] = useState(1)

  const selectPageAction = (number) => {
    setSelectedPage(number)
    change(number)
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
    <Controls prev={moveToPreviousPage} next={moveToNextPage} first={moveToFirstPage} last={moveToLastPage}>
      <div className={style.pagination}>
        {
          pageRange.map((pageNum, index) => (
            <Page pageNum={pageNum} selected={selectedPage} action={selectPageAction} key={index} />
          ))
        }
      </div>
    </Controls>
  )
}

export default Pagination