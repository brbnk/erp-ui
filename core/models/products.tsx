import { Base } from './base'

export interface Products extends Base {
  img: string,
  name: string,
  discount?: number,
  price: number
  code: string,
  auxcode: string,
  reference: string,
  isactive: boolean,
  description: string,
  brand: string,
  categories: string,
  supplier: string,
  keywords: string
}