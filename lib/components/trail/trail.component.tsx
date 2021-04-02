import React from 'react'
import { useTrail, animated } from 'react-spring'
import { TrailConfigs } from 'core/types'

interface TrailProps {
  children?: React.ReactNode,
  containerClass?: string,
  configs?: TrailConfigs
}

const Trail = ({ children, containerClass, configs }: TrailProps) => {
  const items = React.Children.toArray(children)
  const { reset, reverse } = configs

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2500, friction: 200 },
    opacity: reverse ? 0 : 1,
    from: { opacity: reverse ? 1 : 0 },
    reset, reverse
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
