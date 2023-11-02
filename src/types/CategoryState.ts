import { Category } from './Category'

export type CategoryState = {
  categories: Category[]
  error: null | string
  isLoading: boolean
  selectedCategoryId: number
}
