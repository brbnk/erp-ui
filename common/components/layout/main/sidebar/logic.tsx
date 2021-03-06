import Link from 'next/link'
import { forwardRef } from 'react'

import {
  Dashboard,
  MonetizationOn,
  Group,
  ListAlt,
  Settings
} from '@material-ui/icons'

export type IconType = 'dashboard' | 'monetization' | 'users' | 'catalog' | 'settings'

const getForwardRef = (icon: any, section: string) => {
  return forwardRef<any, any>(({ onClick, href }, ref) => {
    return (
      <span
        data-href={href}
        onClick={onClick}
        ref={ref}
        style={{ display: 'flex', flexDirection: 'column', paddingTop: '2px'}}
      >
        { icon }
        <span style={{ fontSize: '.7rem', marginTop: '-3px', fontWeight: 'bold' }}>
         { section }
        </span>
      </span>
    )
  })
}

export const icons: Record<IconType, { ref: any, path: string }> = {
  dashboard: {
    ref: getForwardRef(<Dashboard/>, "Dashboard"),
    path: '/dashboard'
  },
  monetization: {
    ref: getForwardRef(<MonetizationOn/>, "Pedidos"),
    path: '/monetization'
  },
  users: {
    ref: getForwardRef(<Group/>, "Usuários"),
    path: '/users'
  },
  catalog: {
    ref: getForwardRef(<ListAlt/>, "Catálogo"),
    path: '/catalog'
  },
  settings: {
    ref: getForwardRef(<Settings/>, "Configs"),
    path: '/settings'
  }
}

interface RenderLinkProps {
  Component: any,
  path: string
}

export const RenderLink = ({ Component, path }: RenderLinkProps) => {
  return (
     <Link href={path} passHref>
       <Component/>
    </Link>
  )
}