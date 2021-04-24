import React from 'react'
import { AccessTime } from '@material-ui/icons'
import { Order } from 'core/models/orders'
import OrderCard from './OrderCard'

import style from './Orders.module.scss'

interface OrdersProps extends React.HTMLAttributes<HTMLDivElement> {
  orders: Order[]
}

function OrderList({ orders, ...rest }: OrdersProps)  {
  const { layout__orders, orders__card, orders_header } = style

  return (
    <section className={layout__orders} { ...rest }>
      <div className={orders_header}>
        <AccessTime/>
        <h2> Pedidos Recentes </h2>
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