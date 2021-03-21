import style from './controls.module.scss'
import PreviousIcon from '@material-ui/icons/NavigateBefore'
import NextIcon from '@material-ui/icons/NavigateNext'
import LastPageIcon from '@material-ui/icons/LastPage'
import FirstPageIcon from '@material-ui/icons/FirstPage'

import { SelectedPage } from '../../../hooks/usePagination'

type ControlsProps = {
  children: JSX.Element[] | JSX.Element,
  prev: () => void,
  next: () => void,
  first: () => void,
  last: () => void,
  selected: SelectedPage,
  total: number
}

const Controls = ({ children, prev, next, first, last, total, selected }: ControlsProps) => {
  const { page, totalPages } = selected

  return (
    <div className={style.control_wrapper}>
      <div className={style.control}>
        <FirstPageIcon onClick={ first }/>
        <PreviousIcon onClick={ prev }/>
        { children }
        <NextIcon onClick={ next }/>
        <LastPageIcon onClick={ last }/>
      </div>
      <div className={style.counter}>
        <span> Total: { total }  </span>
        <span> Page { page } of { totalPages } </span>
      </div>
    </div>
  )
}

export default Controls