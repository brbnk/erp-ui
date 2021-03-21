import style from './modal.module.scss'
import { animated, useSpring } from 'react-spring'

type ModalProps = {
  children?: JSX.Element | JSX.Element[]
}

const Modal = ({ children }: ModalProps) => {
  const { wrapper, modal } = style

  const props = useSpring({
    config: { mass: 1, tension: 300, friction: 30 },
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <animated.div className={wrapper} style={props}>
      <div className={modal}>
        { children }
      </div>
    </animated.div>
  )
}

export default Modal