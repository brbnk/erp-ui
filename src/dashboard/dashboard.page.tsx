import { useState, useEffect } from 'react'
import { Page } from 'common/components/layout'
import { Order } from 'core/models/orders'
import { OrderList } from './components'

import mock from './mock/orders'

import styles from './dashboard.module.scss'

const Dashboard = () => {
  const [ orders, setOrders ] = useState<Order[]>([])

  const {
    layout,
    layout__stats,
    layout__left,
    layout__right
  } = styles

  useEffect(() => {
    setOrders(mock)
  }, [])

  return (
    <Page title='Dashboard' contentLayout={layout}>
      <OrderList
        style={{
          gridRow: '1/3',
          gridColumn: '1'
        }}
        orders={orders}
      />
      <section className={layout__stats}>

      </section>
      <section className={layout__left}>

      </section>
      <section className={layout__right}>

      </section>
    </Page>
  )
}

export default Dashboard