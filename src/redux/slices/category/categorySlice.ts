import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../../api'
import { Category } from '../../../types/Category'

export type category = {
  categoryName: string
}

export type ProductState = {
  items: Category[]
  error: null | string
  isLoading: boolean
}
const initialState: ProductState = {
  items: [],
  error: null,
  isLoading: false
}

export const getCategoryThunk = createAsyncThunk('categories/get', async () => {
  try {
    const res = await api.get('/api/categories')
    console.log('res', res)
    return res.data.payload
  } catch (error) {
    console.log('👀 ', error)
  }
})

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryThunk.fulfilled, (state, action) => {
      state.items = action.payload
      return state
    })
  }
})

export default categorySlice.reducer
