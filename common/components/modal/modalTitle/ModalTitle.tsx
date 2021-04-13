import style from './ModalTitle.module.scss'

interface ModalTitleProps {
  children: JSX.Element,
  title: string
}

const Title = ({ children, title }: ModalTitleProps) => {
  return (
    <div className={style.modal_title}>
      { children }
      <h2> { title }  </h2>
    </div>
  )
}

export default Title