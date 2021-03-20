import styles from 'components/layout/main/main.module.scss'
import Title from 'components/layout/main/title/title.component'
import Profile from 'components/layout/main/profile/profile.component'
import Content from 'components/layout/main/content/content.component'

import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getToken } from 'store/authStore'

type PageLayoutProps = {
  children?: React.ReactChildren | React.ReactChild | JSX.Element[] | JSX.Element
  title: string,
  contentLayout: string
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
          img='https://freepikpsd.com/wp-content/uploads/2019/10/avatar-png-2-Transparent-Images.png'
        />
      </div>
      <Content layout={contentLayout}>
        { children }
      </Content>
    </div>
  )
}

export default PageLayout