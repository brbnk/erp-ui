import React from 'react'
import { animated, useSpring } from 'react-spring'

interface ContentTypeProps {
  children?: React.ReactChild | React.ReactChildren | JSX.Element[] | JSX.Element,
  layout?: string
}

const Content = ({ children, layout }: ContentTypeProps) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: {opacity: 1 },
    config: { duration: 400 }
  })

  return (
    <animated.main className={ layout } style={ props }>
      { children }
    </animated.main>
  )
}

export default Content