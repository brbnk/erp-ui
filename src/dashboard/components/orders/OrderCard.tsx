import style from './OrderCard.module.scss'
import { cn } from 'core/utils/helpers'
import { Order } from 'core/models/orders'

interface OrderCardProps {
  item: Order
}

function OrderCard({ item }: OrderCardProps) {
  const {
    card,
    card_info,
    card__info_customer, customer,
    card__info_order,
    order, order__price, order__freight,
    status
  } = style

  function getAddress(order: Order): string {
    const {
      street,
      number,
      zipcode,
      city,
      state
    } = order.customer.address

    return `${street}, ${number}, ${zipcode} - ${city}/${state}`
  }

  return (
    <div className={card}>
      <div className={cn([card_info, card__info_customer])}>
        <h2> # { item.code } </h2>
        <div className={customer}>
          <h3 style={{ fontSize: '1.3rem' }}> { item.customer.fullname } </h3>
          <p><i> { getAddress(item) } </i></p>
        </div>
        <span className={status}>
          { item.status }
        </span>
      </div>
      <div className={cn([card_info, card__info_order])}>
        <img src='./mercado_livre.png' alt="logo mercado livre" width={100} height={27} style={{ opacity: '.7'}}/>
        <div className={order}>
          <span className={order__freight}>
            { item.freight }
          </span>
          <span className={order__price}>
            R$ { item.total.toString() }
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderCard