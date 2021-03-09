import styles from './sidebar.module.scss'
import Link from 'next/link'

import { forwardRef } from 'react'
import { useSpring, animated } from 'react-spring'
import DashboardIcon from '@material-ui/icons/Dashboard'
import MonetizationOn from '@material-ui/icons/MonetizationOn'

const icons = {
  Dashboard: <DashboardIcon/>,
  Monetization: <MonetizationOn />
}

const sidebarLinks = Object.keys(icons).reduce((obj, key) => {
  const ref = forwardRef(({ onClick, href }, ref) => {
    return (
      <span data-href={href} onClick={onClick} ref={ref}>
        { icons[key] }
      </span>
    )
  })
  return {...obj, [key]: ref}
}, {})

const Sidebar = () => {
  const {sidebar} = styles

  const { Dashboard, Monetization } = sidebarLinks
  const props = useSpring({
    config: { mass: 1, tension: 400, friction: 50, velocity: 0 },
    opacity: 1, from: { opacity: 0 }
  })

  return (
    <animated.div className={sidebar} style={props}>
      <Link href='/dashboard' passHref>
        <Dashboard/>
      </Link>
      <Link href='/monetization' passHref>
        <Monetization />
      </Link>
    </animated.div>
  )
}

export default Sidebar