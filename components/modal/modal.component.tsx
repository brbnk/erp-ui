import style from './modal.module.scss'
import { animated, useSpring } from 'react-spring'

type ModalProps = {
  children?: JSX.Element | JSX.Element[],
  modalState: (state: boolean) => void
}

const Modal = ({ children, modalState }: ModalProps) => {
  const { wrapper, modal, actions } = style

  const props = useSpring({
    config: { mass: 1, tension: 300, friction: 30 },
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <animated.div className={wrapper} style={props}>
      <div className={modal}>
        { children }
        <div className={actions}>
          <span className={style.insert}> INSERIR </span>
          <span className={style.cancel} onClick={() => modalState(false)}> CANCELAR </span>
        </div>
      </div>
    </animated.div>
  )
}

export default Modal