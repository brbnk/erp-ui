import style from './modalTitle.module.scss'

type ModalTitleProps = {
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