import React from 'react'
import OrderCard from './OrderCard'
import { Order } from 'core/models/orders'
import { AccessTime } from '@material-ui/icons'

import orderListStyle from './OrdersList.module.scss'
import dashboardStyle from '../../dashboard.module.scss'

interface OrdersProps extends React.HTMLAttributes<HTMLDivElement> {
  orders: Order[]
}

function OrderList({ orders, ...rest }: OrdersProps)  {
  const { layout__orders, orders__card } = orderListStyle
  const { section_header } = dashboardStyle

  return (
    <section className={layout__orders} { ...rest }>
      <div className={section_header}>
        <AccessTime/>
        <h1> Pedidos Recentes </h1>
      </div>
      <div className={orders__card}>
        {
          orders.map((order: Order, index: number) =>
            <OrderCard item={order} key={index}/>)
        }
      </div>
    </section>
  )
}

export default OrderList