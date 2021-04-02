import { Base } from './base'

export interface User extends Base {
  found: boolean,
  name?: string,
  photo?: string
}