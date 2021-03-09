import styles from './main.module.scss'
import Sidebar from 'components/layout/main/sidebar/sidebar.component'

const MainPageLayout = ({ children }) => {
  const { page_wrapper } = styles

  return (
    <div className={page_wrapper}>
      <Sidebar/>
      { children }
    </div>
  )
}

export const getLayout = page => <MainPageLayout>{page}</MainPageLayout>

export default MainPageLayout