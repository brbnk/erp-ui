import { animated, useSpring } from 'react-spring'

const Content = ({ children, layout }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: {opacity: 1 },
    config: { duration: 400 }
  })

  return (
    <animated.div className={ layout } style={props}>
      { children }
    </animated.div>
  )
}

export default Content