import styles from 'components/layout/main/main.module.scss'
import Title from 'components/layout/main/title/title.component'

const PageLayout = ({ children, title }) => {
  const { content, header, profile, info } = styles

  return (
    <div className={content}>
      <div className={header}>
        <Title text={title} />
        <div className={profile}>
          <div className={info}>
            <h4> Bruno Nakayabu </h4>
            <span> Admnistrador </span>
          </div>
          <img src='https://freepikpsd.com/wp-content/uploads/2019/10/avatar-png-2-Transparent-Images.png'/>
        </div>
      </div>
      { children }
    </div>
  )
}

export default PageLayout