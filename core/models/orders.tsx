import { Base } from './base'
import { OrderStatus } from 'core/enums/order-status'

interface Address {
  street: string,
  number: string,
  zipcode: string,
  state: string,
  city: string
}

interface Customer {
  fullname: string,
  address: Address
}

export interface Order extends Base {
  code: string,
  customer: Customer
  total: number,
  freight: string,
  status: OrderStatus
}