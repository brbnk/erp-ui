import { getLayout as mainPageLayout } from 'components/layout/main/main.component'
import PageLayout from 'components/layout/main/page/page.component'

const Dashboard = () => {
  return (
    <PageLayout title='Dashboard'>

    </PageLayout>
  )
}

Dashboard.getLayout = mainPageLayout

export default Dashboard