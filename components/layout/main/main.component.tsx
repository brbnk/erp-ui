import styles from './main.module.scss'
import Sidebar from 'components/layout/main/sidebar/sidebar.component'

const MainPageLayout = ({ children }) => {
  const { main_wrapper } = styles

  return (
    <div className={main_wrapper}>
      <Sidebar/>
      <div>
        { children }
      </div>
    </div>
  )
}

export const getLayout = function(page: any) {
  if (true) return page
  return <MainPageLayout> { page } </MainPageLayout>
}


export default MainPageLayout