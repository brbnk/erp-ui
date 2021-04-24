import { Base } from './base'

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
  status: string
}