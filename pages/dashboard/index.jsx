import { getLayout as mainPageLayout } from 'components/layout/main/main.component'
import PageLayout from 'components/layout/main/page/page.component'
import Content from 'components/layout/main/content/content.component'

import styles from './dashboard.module.scss'

const Dashboard = () => {
  const { layout, orders, stats, left, right } = styles
  return (
    <PageLayout title='Dashboard'>
      <Content layout={layout}>
        <div className={orders}> </div>
        <div className={stats}> </div>
        <div className={left}> </div>
        <div className={right}> </div>
      </Content>
    </PageLayout>
  )
}

Dashboard.getLayout = mainPageLayout

export default Dashboard