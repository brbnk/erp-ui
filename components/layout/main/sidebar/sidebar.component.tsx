import styles from './sidebar.module.scss'
import Link from 'next/link'

import { forwardRef } from 'react'

import Trail from 'components/trail/trail.component'

import {
  Dashboard,
  MonetizationOn,
  Group,
  ListAlt,
  Settings
} from '@material-ui/icons'

const getForwardRef = (component: any) => {
  return forwardRef<any, any>(({ onClick, href }, ref) => {
    return (
      <span data-href={href} onClick={onClick} ref={ref}>
        { component }
      </span>
    )
  })
}

type IconType = 'Dashboard' | 'Monetization' | 'Users' | 'Catalog' | 'Settings'

const icons: Record<IconType, { ref: any, path: string }> = {
  Dashboard: {
    ref: getForwardRef(<Dashboard/>),
    path: '/dashboard'
  },
  Monetization: {
    ref: getForwardRef(<MonetizationOn/>),
    path: '/monetization'
  },
  Users: {
    ref: getForwardRef(<Group/>),
    path: '/users'
  },
  Catalog: {
    ref: getForwardRef(<ListAlt/>),
    path: '/catalog'
  },
  Settings: {
    ref: getForwardRef(<Settings/>),
    path: '/monetization'
  }
}

type RenderLinkProps = {
  Component: any,
  path: string
}

const RenderLink = ({ Component, path }: RenderLinkProps) => {
  return (
     <Link href={path} passHref>
       <Component/>
    </Link>
  )
}

const Sidebar = () => {
  const { sidebar } = styles

  return (
    <div className={sidebar}>
      <Trail>
        {
          Object.keys(icons).map((key: IconType, index: number) => {
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