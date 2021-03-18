import React from 'react'
import { useTrail, animated } from 'react-spring'

type TrailProps = {
  children?: React.ReactNode,
  containerClass?: string
}

const Trail = ({ children, containerClass }: TrailProps) => {
  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2500, friction: 200 },
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <>
      {trail.map((t, index) => (
        <animated.div key={index} style={t} className={containerClass}> {items[index]} </animated.div>
      ))}
    </>
  )
}

export default Trail
