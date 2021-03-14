import style from './modal.module.scss'

const Modal = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.modal}>
        <div> x </div>
        { children }
      </div>
    </div>
  )
}

export default Modal