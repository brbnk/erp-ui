import React from 'react'
import { useTrail, a } from 'react-spring'

const Trail = ({ children, containerClass }) => {
  const items = React.Children.toArray(children)

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2500, friction: 200 },
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <>
      {trail.map((t, index) => (
        <a.div key={index} style={t} className={containerClass}> {items[index]} </a.div>
      ))}
    </>
  )
}

export default Trail
