import style from './OrderCard.module.scss'
import { cn } from 'core/utils/helpers'
import { Order } from 'core/models/orders'
import { OrderStatus } from 'core/enums/order-status'
import { LocalShipping } from '@material-ui/icons'

interface OrderCardProps {
  item: Order
}

function OrderCard({ item }: OrderCardProps) {
  const {
    card,
    card_info,
    card__info_customer, customer,
    card__info_order,
    order, order__price, order__shipping,
    status, status__processing, status__delivering, status__finalized
  } = style

  function getAddress(order: Order): string {
    const { street, number, zipcode, city, state } = order.customer.address
    return `${street}, ${number}, ${zipcode} - ${city}/${state}`
  }

  function getStatusStyle(status: OrderStatus): string {
    switch(status) {
      case OrderStatus.Processing: return status__processing
      case OrderStatus.Delivering: return status__delivering
      case OrderStatus.Finalized: return status__finalized
    }
  }

  function getStatusMessage(status: OrderStatus): string {
    switch(status) {
      case OrderStatus.Processing: return "Em Separação"
      case OrderStatus.Delivering: return "Em Transporte"
      case OrderStatus.Finalized: return "Finalizado"
    }
  }

  return (
    <div className={card}>
      <div className={cn([card_info, card__info_customer])}>
        <h1> # { item.code } </h1>
        <div className={customer}>
          <h2> { item.customer.fullname } </h2>
          <p><i> { getAddress(item) } </i></p>
        </div>
        <span className={ cn([status, getStatusStyle(item.status)]) }>
          { getStatusMessage(item.status) }
        </span>
      </div>
      <div className={cn([card_info, card__info_order])}>
        <img src='./mercado_livre.png' alt="logo mercado livre" width={100} height={27}/>
        <div className={order}>
          <div className={order__shipping}>
            <LocalShipping/>
            <span>{ item.freight } </span>
          </div>
          <span className={order__price}>
            R$ { item.total.toString() }
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderCard