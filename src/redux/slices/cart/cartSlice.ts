import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../products/productSlice'

const initialState: Product[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const isDuplicated = state.find((cart) => cart._id === product.id)
      if (isDuplicated) {
        return state
      }
      state = [...state, product]
      return state
    },
    removeFromCart: (state, action) => {
      console.log('action:', action)
      const productId = action.payload

      const updatedCart = state.filter((item) => item._id !== productId)
      console.log('updatedCart:', updatedCart)
      state = updatedCart
      return state
    }
  }
})
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
