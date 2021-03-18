import style from './modal.module.scss'

type ModalProps = {
  children?: JSX.Element | JSX.Element[]
}

const Modal = ({ children }: ModalProps) => {
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