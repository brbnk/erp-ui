import styles from './page.module.scss'
import Sidebar from 'components/layout/sidebar/sidebar.component'

const Page = ({ children }) => {
  const { page_wrapper } = styles

  return (
    <div className={page_wrapper}>
      <Sidebar/>
      { children }
    </div>
  )
}

export default Page