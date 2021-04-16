import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { icons, RenderLink, IconType } from './logic'

import Trail from 'common/components/trail/Trail'
import styles from './Sidebar.module.scss'


const Sidebar = () => {
  const [ selectedLink, setSelectedLink ] = useState<IconType>('dashboard')

  const { sidebar, selected } = styles
  const router = useRouter()

  useEffect(() => {
    let pathname = router.pathname
    pathname = pathname.slice(1, pathname.length + 1)

    if (pathname != 'dashboard') {
      setSelectedLink(pathname as IconType)
    }
  }, [])

  return (
    <section className={sidebar}>
      <Trail configs={{ reset: false, reverse: false }}>
        {
          Object.keys(icons).map((key: IconType, index: number) => {
            const { ref, path } = icons[key]
            return (
              <div
                key={index}
                className={ selectedLink == key ? selected : null }
                onClick={() => setSelectedLink(key)}
              >
                <RenderLink Component={ref} path={path}/>
              </div>
            )
          })
        }
      </Trail>
    </section>
  )
}

export default Sidebar