import styles from './sidebar.module.scss'
import Link from 'next/link'

import DashboardIcon from '@material-ui/icons/Dashboard'
import MonetizationOn from '@material-ui/icons/MonetizationOn'
import { forwardRef } from 'react'

const icons = {
  Dashboard: <DashboardIcon/>,
  Monetization: <MonetizationOn />
}

const sidebarLinks = Object.keys(icons).reduce((obj, key) => {
  const ref = forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        { icons[key] }
      </a>
    )
  })
  return {...obj, [key]: ref}
}, {})

const Sidebar = () => {
  const {sidebar} = styles

  const { Dashboard, Monetization } = sidebarLinks

  return (
    <div className={sidebar}>
      <Link href='/login' passHref>
        <Dashboard/>
      </Link>
      <Link href='/' passHref>
        <Monetization />
      </Link>
    </div>
  )
}

export default Sidebar