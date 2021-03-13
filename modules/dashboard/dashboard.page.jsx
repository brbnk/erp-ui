import { getLayout as mainPageLayout } from 'components/layout/main/main.component'
import Page from 'components/layout/main/page/page.component'

import styles from './dashboard.module.scss'

const Dashboard = () => {
  const { layout, orders, stats, left, right } = styles
  return (
    <Page title='Dashboard' contentLayout={layout}>
      <div className={orders}> </div>
      <div className={stats}> </div>
      <div className={left}> </div>
      <div className={right}> </div>
    </Page>
  )
}

Dashboard.getLayout = mainPageLayout

export default Dashboard