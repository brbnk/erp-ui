import style from './modal.module.scss'

type ModalType = {
  children?: React.ReactNode
}

const Modal = ({ children }: ModalType) => {
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