import styles from './sidebar.module.scss'
import Link from 'next/link'

import { forwardRef } from 'react'
import { useSpring, animated } from 'react-spring'

import DashboardIcon from '@material-ui/icons/Dashboard'
import MonetizationIcon from '@material-ui/icons/MonetizationOn'
import UsersIcon from '@material-ui/icons/Group'
import CatalogIcon from '@material-ui/icons/ListAlt'
import SettingsIcon from '@material-ui/icons/Settings'

const getForwardRef = (component) => {
  return forwardRef(({ onClick, href }, ref) => {
    return (
      <span data-href={href} onClick={onClick} ref={ref}>
        { component }
      </span>
    )
  })
}

const icons = {
  Dashboard: {
    ref: getForwardRef(<DashboardIcon/>),
    path: '/dashboard',
    delay: 200
  },
  Monetization: {
    ref: getForwardRef(<MonetizationIcon />),
    path: '/monetization',
    delay: 400
  },
  Users: {
    ref: getForwardRef(<UsersIcon />),
    path: '/users',
    delay: 600
  },
  Catalog: {
    ref: getForwardRef(<CatalogIcon />),
    path: '/catalog',
    delay: 800
  },
  Settings: {
    ref: getForwardRef(<SettingsIcon />),
    path: '/monetization',
    delay: 1000
  },
}

const RenderLink = ({ Component, path }) => {
  return (
     <Link href={path} passHref>
       <Component/>
    </Link>
  )
}

const Sidebar = () => {
  const {sidebar} = styles

  const props = time => useSpring({
    from: { opacity: 0 },
    to: {opacity: 1 },
    config: { duration: 200 },
    delay: time
  })

  return (
    <animated.div className={sidebar} style={props(0)}>
      {
        Object.keys(icons).map((key, index) => {
          const { ref, path, delay } = icons[key]
          return (
            <animated.div style={props(delay)} key={index}>
              <RenderLink Component={ref} path={path}/>
            </animated.div>
          )
        })
      }
    </animated.div>
  )
}

export default Sidebar