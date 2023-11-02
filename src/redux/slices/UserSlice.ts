import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../types/User'
import { UserState } from '../../types/UserState'
import { Product } from '../slices/products/productSlice'

const initialState: UserState = {
  users: [],
  error: null,
  isLoading: false,
  hasAccount: false,
  user: {} as User,
  cart: []
}

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    hasAccount: (state, action: PayloadAction<{ password: string; email: string }>) => {
      const user = state.users.find(
        (user) => user.email == action.payload.email && user.password == action.payload.password
      )
      if (user != undefined) {
        console.log(user, action.payload, true)
        state.hasAccount = true
        state.user = user
      } else {
        console.log(user, action.payload, false)
        state.hasAccount = false
      }
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart = [action.payload, ...state.cart]
      // console.log(state.cart,action.payload)
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((product) => {
        return product.id != action.payload
      })
      // },
      // removeUser: (state, action: PayloadAction<number>) => {
      //   state.users = state.users.filter((user) => user.id != action.payload)
      // }
    }
  }
})

const userReducer = usersSlice.reducer
const userAction = usersSlice.actions
export default userReducer
export { userAction }
