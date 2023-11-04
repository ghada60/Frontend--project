// import { User } from '../../types/User'
// import { UserState } from '../../types/UserState'
// import { Product } from '../slices/products/productSlice'

// const initialState: UserState = {
//   users: [],
//   error: null,
//   isLoading: false,
//   hasAccount: false,
//   user: {} as User,
//   cart: []
// }

// const usersSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUsers: (state, action: PayloadAction<User[]>) => {
//       state.users = action.payload
//     },
//     hasAccount: (state, action: PayloadAction<{ password: string; email: string }>) => {
//       const user = state.users.find(
//         (user) => user.email == action.payload.email && user.password == action.payload.password
//       )
//       if (user != undefined) {
//         console.log(user, action.payload, true)
//         state.hasAccount = true
//         state.user = user
//       } else {
//         console.log(user, action.payload, false)
//         state.hasAccount = false
//       }
//     },
//     addToCart: (state, action: PayloadAction<Product>) => {
//       state.cart = [action.payload, ...state.cart]
//       // console.log(state.cart,action.payload)
//     },
//     removeFromCart: (state, action: PayloadAction<number>) => {
//       state.cart = state.cart.filter((product) => {
//         return product.id != action.payload
//       })
//       // },
//       // removeUser: (state, action: PayloadAction<number>) => {
//       //   state.users = state.users.filter((user) => user.id != action.payload)
//       // }
//     }
//   }
// })

// const userReducer = usersSlice.reducer
// const userAction = usersSlice.actions
// export default userReducer
// export { userAction }
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from './products/productSlice'

export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
  profileImageUrl: string
}
export type UserState = {
  cart: any
  users: User[]
  error: null | string
  isLoading: boolean
  isLoggedIn: boolean // every body know if the user logged in
  userData: User | null // i can use the data from anywhere
  isAdmin: boolean
  currentUser: User | null
}
const initialState: UserState = {
  cart: [],
  users: [],
  error: null,
  isLoading: false,
  isLoggedIn: false,
  isAdmin: false,
  userData: null,
  currentUser: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
      state.userData = action.payload
      localStorage.setItem(
        'loginData',
        JSON.stringify({
          isLoggedIn: state.isLoggedIn,
          userData: state.userData
        })
      )
    },
    Adminlogin: (state, action: PayloadAction<User>) => {
      if (state.userData?.role === 'admin') {
        state.isAdmin = true
        state.userData = action.payload
      }
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.userData = null
    },

    userRequest: (state) => {
      state.isLoading = true
    },
    userSuccess: (state, action) => {
      state.isLoading = false
      state.users = action.payload
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart = [action.payload, ...state.cart]
      console.log(state.cart, action.payload)
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((product: { id: number }) => {
        return product.id != action.payload
      })
    },
    removeUser: (state, action: { payload: { userId: number } }) => {
      const filteredItems = state.users.filter((user) => user.id !== action.payload.userId)
      state.users = filteredItems
    },
    getError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    updateUser: (state, action) => {
      const { id, firstName, lastName } = action.payload
      const foundUser = state.users.find((user) => user.id === id)
      if (foundUser) {
        foundUser.firstName = firstName
        foundUser.lastName = lastName
        state.userData = foundUser
        localStorage.setItem(
          'loginData',
          JSON.stringify({
            isLoggedIn: state.isLoggedIn,
            userData: state.userData
          })
        )
      }
    }
  }
})

export const {
  userRequest,
  userSuccess,
  login,
  removeUser,
  logout,
  getError,
  Adminlogin,
  addToCart,
  removeFromCart,
  updateUser
} = userSlice.actions
export default userSlice.reducer
const userAction = userSlice.actions
export { userAction }
