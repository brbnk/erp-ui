import { Base } from './base'

export interface Products extends Base {
  img: string,
  name: string,
  discount?: number,
  price: number
}