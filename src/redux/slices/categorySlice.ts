// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { CategoryState } from '../../types/CategoryState'
// import { Category } from '../../types/Category'

// const initialState: CategoryState = {
//   categories: [],
//   error: null,
//   isLoading: false,
//   selectedCategoryId: 0
// }

// const categorySlice = createSlice({
//   name: 'category',
//   initialState,
//   reducers: {
//     setCategories: (state) => {
//       state.categories = state
//       console.log(action.payload, 'test')
//     },
//     removeCategory: (state, action: PayloadAction<number>) => {
//       state.categories = state.categories.filter((category) => category.id != action.payload)
//     },
//     setSelectedCategory: (state, action) => {
//       state.selectedCategoryId = action.payload
//     },
//     updateCategory: (state, action: PayloadAction<Category>) => {
//       state.categories = state.categories.map((category) => {
//         if (category.id === action.payload.id) {
//           return action.payload
//         }
//         return category
//       })
//       console.log(state.categories)
//     },
//     addNewCategory: (state, action: PayloadAction<Category>) => {
//       action.payload.id = state.categories.length + 1
//       state.categories = [...state.categories, action.payload]
//     }
//   }
// })

// const categoryReducer = categorySlice.reducer
// const categoryAction = categorySlice.actions
// export default categoryReducer
// export { categoryAction }
import { createSlice } from '@reduxjs/toolkit'
export type Category = {
  id: number
  name: string
}
export type CategoryState = {
  categories: Category[]
  error: null | string
  isLoading: boolean
  selectedCategoryId: number
}
const initialState: CategoryState = {
  categories: [],
  error: null,
  isLoading: false,
  selectedCategoryId: 0
}
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    categoriesRequest: (state) => {
      state.isLoading = true
    },
    categoriesSuccess: (state, action) => {
      state.isLoading = false
      state.categories = action.payload
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategoryId = action.payload
    },
    addCategory: (state, action) => {
      state.categories = [action.payload.category, ...state.categories]
    },
    removeCategory: (state, action: { payload: { categoryId: number } }) => {
      const filteredItems = state.categories.filter(
        (category) => category.id !== action.payload.categoryId
      )
      state.categories = filteredItems
    },
    updateCategory: (state, action: { payload: { data: Category } }) => {
      const filteredItems = state.categories.filter(
        (product) => product.id !== action.payload.data.id
      )
      state.categories = filteredItems
      state.categories = [action.payload.data, ...state.categories]
    }
  }
})
export const categoryAction = categorySlice.actions
export default categorySlice.reducer
