import style from './controls.module.scss'
import PreviousIcon from '@material-ui/icons/NavigateBefore'
import NextIcon from '@material-ui/icons/NavigateNext'
import LastPageIcon from '@material-ui/icons/LastPage'
import FirstPageIcon from '@material-ui/icons/FirstPage'

const Controls = ({ children, prev, next, first, last }) => {
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
        <span> Total: 18 </span>
        <span> Page 1 of 2 </span>
      </div>
    </div>
  )
}

export default Controls