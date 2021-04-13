import styles from 'common/components/layout/main/Main.module.scss'
import Title from 'common/components/layout/main/title/Title'
import Profile from 'common/components/layout/main/profile/Profile'
import Content from 'common/components/layout/main/content/Content'

import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getToken } from 'contexts/store/authStore'

interface PageLayoutProps {
  children?: React.ReactChildren | React.ReactChild | JSX.Element[] | JSX.Element
  title: string,
  contentLayout?: string
}

const PageLayout = ({ children, title, contentLayout }: PageLayoutProps) => {
  const router = useRouter()
  const { main, header } = styles

  useEffect(() => {
    const auth = getToken()

    if (!auth) {
      router.push('/login')
    }
  }, [])

  return (
    <div className={main}>
      <div className={header}>
        <Title text={title} />
        <Profile
          name='Bruno Nakayabu'
          role='Admnistrador'
          img='https://mlkgqpwrt1na.i.optimole.com/jYEI2CY-j_4Wfhth/w:auto/h:auto/q:auto/https://www.negretti.com.br/wp-content/uploads/2020/05/O-QUE-E-ECOMMERCE.jpg'
        />
      </div>
      <Content layout={contentLayout}>
        { children }
      </Content>
    </div>
  )
}

export default PageLayout