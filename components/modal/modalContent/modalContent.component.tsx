import style from './modalContent.module.scss'

type ModalContentProps = {
  children: JSX.Element | JSX.Element[]
}

const ModalContent = ({ children }: ModalContentProps) => {
  return (
    <div className={style.modal_content}>
      { children }
    </div>
  )
}

export default ModalContent