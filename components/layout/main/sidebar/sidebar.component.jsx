import styles from './sidebar.module.scss'
import Link from 'next/link'

import { forwardRef } from 'react'
import { useSpring, animated } from 'react-spring'

import Trail from 'components/trail/trail.component'

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
    path: '/dashboard'
  },
  Monetization: {
    ref: getForwardRef(<MonetizationIcon />),
    path: '/monetization'
  },
  Users: {
    ref: getForwardRef(<UsersIcon />),
    path: '/users'
  },
  Catalog: {
    ref: getForwardRef(<CatalogIcon />),
    path: '/catalog'
  },
  Settings: {
    ref: getForwardRef(<SettingsIcon />),
    path: '/monetization'
  }
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

  return (
    <div className={sidebar}>
      <Trail>
        {
          Object.keys(icons).map((key, index) => {
            const { ref, path } = icons[key]
            return (
              <div key={index}>
                <RenderLink Component={ref} path={path}/>
              </div>
            )
          })
        }
      </Trail>
    </div>
  )
}

export default Sidebar