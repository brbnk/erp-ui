import style from './pagination.module.scss'
import { useState } from 'react'

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

  return (
    <div className={style.pagination}>
      {
        pageRange.map((pageNum, index) => (
          <Page pageNum={pageNum} selected={selectedPage} action={selectPageAction} key={index} />
        ))
      }
    </div>
  )
}

export default Pagination