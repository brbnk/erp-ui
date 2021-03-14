import { useState, useEffect } from 'react'
import { useSpring, a } from 'react-spring'

import styles from './user.module.scss'

const User = ({ user, changeUser, visibility }) => {
  const [firstLoad, setFirstLoad] = useState(true)

  const { username } = styles
  const { name, photo } = user

  useEffect(() => {
    setFirstLoad(false)
  }, [])

  const wrapperProps = useSpring({
    config: { mass: 1, tension: 400, friction: 50, velocity: 0 },
    to: { height: visibility ? 250 : 0 },
    from: { height: visibility || firstLoad ? 0 : 250 }
  })

  return (
    <a.div className={username} style={wrapperProps}>
      <img src={photo}/>
      <h2> {name} </h2>
      <a onClick={changeUser}> Trocar usuário </a>
    </a.div>
  )
}

export default User