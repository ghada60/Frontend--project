import { User } from './User'
import { Product } from '../redux/slices/products/productSlice'

export type UserState = {
  users: User[]
  error: null | string
  isLoading: boolean
  hasAccount: boolean
  user: User
  cart: Product[]
}
