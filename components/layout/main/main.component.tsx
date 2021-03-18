import styles from './main.module.scss'
import Sidebar from 'components/layout/main/sidebar/sidebar.component'

type MainPageLayoutProps = {
  children: React.ReactChild[]
}

const MainPageLayout = ({ children }: MainPageLayoutProps) => {
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

export const applyLayout = function(page: JSX.Element) {
  return <MainPageLayout> { page } </MainPageLayout>
}

export default MainPageLayout