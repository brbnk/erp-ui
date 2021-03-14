import styles from 'components/layout/main/main.module.scss'
import Title from 'components/layout/main/title/title.component'
import Profile from 'components/layout/main/profile/profile.component'
import Content from 'components/layout/main/content/content.component'

const PageLayout = ({ children, title, contentLayout }) => {
  const { main, header } = styles

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