import styles from 'components/layout/main/main.module.scss'
import Title from 'components/layout/main/title/title.component'
import Profile from 'components/layout/main/profile/profile.component'

const PageLayout = ({ children, title }) => {
  const { content, header } = styles

  return (
    <div className={content}>
      <div className={header}>
        <Title text={title} />
        <Profile
          name='Bruno Nakayabu'
          role='Admnistrador'
          img='https://freepikpsd.com/wp-content/uploads/2019/10/avatar-png-2-Transparent-Images.png'
        />
      </div>
      { children }
    </div>
  )
}

export default PageLayout