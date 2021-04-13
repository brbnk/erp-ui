import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

import styles from './User.module.scss'

type UserProps = {
  user: any,
  changeUser: () => void,
  visibility: boolean
}

const User = ({ user, changeUser, visibility }: UserProps) => {
  const [firstLoad, setFirstLoad] = useState(true)

  const { username } = styles

  useEffect(() => {
    setFirstLoad(false)
  }, [])

  const wrapperProps = useSpring({
    config: { mass: 1, tension: 400, friction: 50, velocity: 0 },
    to: { height: visibility ? 250 : 0 },
    from: { height: visibility || firstLoad ? 0 : 250 }
  })

  return (
    user.found ? <animated.div className={username} style={wrapperProps}>
      <img src={user.photo}/>
      <h2> {user.name} </h2>
      <a onClick={changeUser}> Trocar usuário </a>
    </animated.div> : null
  )
}

export default User