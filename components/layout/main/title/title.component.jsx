import { useSpring, animated } from 'react-spring'

const Title = ({ text }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: {opacity: 1 },
    config: { duration: 400 }
  })

  return (
    <animated.div style={props}>
      <h1> {text} </h1>
    </animated.div>
  )
}

export default Title