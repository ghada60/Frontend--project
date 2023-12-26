// // import { User } from '../../types/User'
// // import { UserState } from '../../types/UserState'
// // import { Product } from '../slices/products/productSlice'

// // const initialState: UserState = {
// //   users: [],
// //   error: null,
// //   isLoading: false,
// //   hasAccount: false,
// //   user: {} as User,
// //   cart: []
// // }

// // const usersSlice = createSlice({
// //   name: 'user',
// //   initialState,
// //   reducers: {
// //     setUsers: (state, action: PayloadAction<User[]>) => {
// //       state.users = action.payload
// //     },
// //     hasAccount: (state, action: PayloadAction<{ password: string; email: string }>) => {
// //       const user = state.users.find(
// //         (user) => user.email == action.payload.email && user.password == action.payload.password
// //       )
// //       if (user != undefined) {
// //         console.log(user, action.payload, true)
// //         state.hasAccount = true
// //         state.user = user
// //       } else {
// //         console.log(user, action.payload, false)
// //         state.hasAccount = false
// //       }
// //     },
// //     addToCart: (state, action: PayloadAction<Product>) => {
// //       state.cart = [action.payload, ...state.cart]
// //       // console.log(state.cart,action.payload)
// //     },
// //     removeFromCart: (state, action: PayloadAction<number>) => {
// //       state.cart = state.cart.filter((product) => {
// //         return product.id != action.payload
// //       })
// //       // },
// //       // removeUser: (state, action: PayloadAction<number>) => {
// //       //   state.users = state.users.filter((user) => user.id != action.payload)
// //       // }
// //     }
// //   }
// // })

// // const userReducer = usersSlice.reducer
// // const userAction = usersSlice.actions
// // export default userReducer
// // export { userAction }
// //-------------------------------------------------------------
// // import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// // import { Product } from './products/productSlice'

// // export type User = {
// //   id: number
// //   firstName: string
// //   lastName: string
// //   email: string
// //   password: string
// //   role: string
// //   profileImageUrl: string
// // }
// // export type UserState = {
// //   cart: any
// //   users: User[]
// //   error: null | string
// //   isLoading: boolean
// //   isLoggedIn: boolean // every body know if the user logged in
// //   userData: User | null // i can use the data from anywhere
// //   isAdmin: boolean
// //   currentUser: User | null
// // }
// // const initialState: UserState = {
// //   cart: [],
// //   users: [],
// //   error: null,
// //   isLoading: false,
// //   isLoggedIn: false,
// //   isAdmin: false,
// //   userData: null,
// //   currentUser: null
// // }

// // export const userSlice = createSlice({
// //   name: 'user',
// //   initialState,
// //   reducers: {
// //     login: (state, action) => {
// //       state.isLoggedIn = true
// //       state.userData = action.payload
// //       localStorage.setItem(
// //         'loginData',
// //         JSON.stringify({
// //           isLoggedIn: state.isLoggedIn,
// //           userData: state.userData
// //         })
// //       )
// //     },
// //     Adminlogin: (state, action: PayloadAction<User>) => {
// //       if (state.userData?.role === 'admin') {
// //         state.isAdmin = true
// //         state.userData = action.payload
// //       }
// //     },
// //     logout: (state) => {
// //       state.isLoggedIn = false
// //       state.userData = null
// //     },

// //     userRequest: (state) => {
// //       state.isLoading = true
// //     },
// //     userSuccess: (state, action) => {
// //       state.isLoading = false
// //       state.users = action.payload
// //     },
// //     addToCart: (state, action: PayloadAction<Product>) => {
// //       state.cart = [action.payload, ...state.cart]
// //       console.log(state.cart, action.payload)
// //     },
// //     removeFromCart: (state, action: PayloadAction<number>) => {
// //       state.cart = state.cart.filter((product: { id: number }) => {
// //         return product.id != action.payload
// //       })
// //     },
// //     removeUser: (state, action: { payload: { userId: number } }) => {
// //       const filteredItems = state.users.filter((user) => user.id !== action.payload.userId)
// //       state.users = filteredItems
// //     },
// //     getError: (state, action: PayloadAction<string>) => {
// //       state.error = action.payload
// //     },
// //     updateUser: (state, action) => {
// //       const { id, firstName, lastName } = action.payload
// //       const foundUser = state.users.find((user) => user.id === id)
// //       if (foundUser) {
// //         foundUser.firstName = firstName
// //         foundUser.lastName = lastName
// //         state.userData = foundUser
// //         localStorage.setItem(
// //           'loginData',
// //           JSON.stringify({
// //             isLoggedIn: state.isLoggedIn,
// //             userData: state.userData
// //           })
// //         )
// //       }
// //     }
// //   }
// // })

// // export const {
// //   userRequest,
// //   userSuccess,
// //   login,
// //   removeUser,
// //   logout,
// //   getError,
// //   Adminlogin,
// //   addToCart,
// //   removeFromCart,
// //   updateUser
// // } = userSlice.actions
// // export default userSlice.reducer
// // const userAction = userSlice.actions
// // export { userAction }

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { AxiosError } from 'axios'

// import api from '../../../api'
// import { getUserFromStorage } from '../../../utils/token'
// import { ROLES } from '../../../contasts'

// export type DecodedUser = {
//   email: string
//   exp: number
//   iat: number
//   role: Role
//   userId: string
// }
// const user = getUserFromStorage()

// export type Role = keyof typeof ROLES

// // type Role = keyof typeof ROLES
// export type User = {
//   _id: string
//   email: string
//   isActive: boolean
//   role: Role
// }

// export type UsersState = {
//   items: User[]
//   user: null | User
//   error: null | string
//   isLoading: boolean
// }

// const initialState: UsersState = {
//   items: [],
//   user,
//   error: null,
//   isLoading: false
// }

// type LoginRes = {
//   msg: string
//   token: string
//   user: User
// }
// // Do this if you want a proper way of handling requests
// export const loginThunk = createAsyncThunk(
//   'user/login',
//   async (credentials: { email: string; password: string }, { rejectWithValue }) => {
//     try {
//       const res = await api.post('/api/users/login', credentials)

//       return res.data
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         return rejectWithValue(error.response?.data.msg)
//       }
//     }
//   }
// )

// export const getUsersThunk = createAsyncThunk('users/get', async () => {
//   try {
//     const res = await api.get('api/users')
//     return res.data.users
//   } catch (error) {
//     console.log('👀 ', error)
//   }
// })

// export const deleteUserThunk = createAsyncThunk('users/delete', async (userId: string) => {
//   try {
//     await api.delete(`api/users/${userId}`)
//     return userId
//   } catch (error) {
//     console.log('👀 ', error)
//   }
// })
// export const grantRoleUserThunk = createAsyncThunk(
//   'users/role',
//   async ({ role, userId }: { role: Role; userId: User['_id'] }) => {
//     try {
//       const res = await api.put('api/users/role', {
//         role,
//         userId
//       })

//       return res.data.user
//     } catch (error) {
//       console.log('👀 ', error)
//     }
//   }
// )

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.user = action.payload
//     },
//     // use this if you DON't WANT TO USE getUsersThunk
//     usersSuccess: (state, action) => {
//       state.items = action.payload
//     }
//   },
//   // Do this if you want a proper way of handling requests
//   extraReducers: (builder) => {
//     builder.addCase(loginThunk.pending, (state) => {
//       state.isLoading = true
//     })
//     builder.addCase(loginThunk.rejected, (state, action) => {
//       const errorMsg = action.payload

//       if (typeof errorMsg === 'string') {
//         state.error = errorMsg
//       }
//       state.isLoading = false
//       return state
//     })
//     builder.addCase(loginThunk.fulfilled, (state, action) => {
//       state.user = action.payload.user
//       state.isLoading = false
//       return state
//     })
//     builder.addCase(getUsersThunk.fulfilled, (state, action) => {
//       state.items = action.payload
//       return state
//     })
//     builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
//       const userId = action.payload
//       const updatedUsers = state.items.filter((user) => user._id !== userId)
//       state.items = updatedUsers
//       return state
//     })
//     builder.addCase(grantRoleUserThunk.fulfilled, (state, action) => {
//       const updatedUser = action.payload
//       const userId = updatedUser._id

//       const updatedUsers = state.items.map((user) => {
//         if (user._id === userId) {
//           return updatedUser
//         }
//         return user
//       })
//       state.items = updatedUsers
//       return state
//     })
//   }
// })
// export const { loginSuccess, usersSuccess } = userSlice.actions

// export default userSlice.reducer

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import api from '../../../api'
import { getTokenFromStorage, getUserFromStorage } from '../../../utils/token'
import { ROLES } from '../../../contasts'

export type DecodedUser = {
  email: string
  exp: number
  iat: number
  role: Role
  userId: string
}
const user = getUserFromStorage()

export type Role = keyof typeof ROLES

// type Role = keyof typeof ROLES
export type User = {
  _id: string
  email: string
  isActive: boolean
  role: Role
}

export type UsersState = {
  items: User[]
  user: null | User
  error: null | string
  isLoading: boolean
}

const initialState: UsersState = {
  items: [],
  user,
  error: null,
  isLoading: false
}

type LoginRes = {
  msg: string
  token: string
  user: User
}

// Do this if you want a proper way of handling requests
export const loginThunk = createAsyncThunk(
  'user/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await api.post('/api/auth/login', credentials)

      return res.data
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.msg)
      }
    }
  }
)

export const getUsersThunk = createAsyncThunk('users/get', async () => {
  try {
    const token = getTokenFromStorage()
    if (token) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`
    }

    const res = await api.get('/api/users')
    return res.data.payload
  } catch (error) {
    console.log('👀 ', error)
  }
})

export const deleteUserThunk = createAsyncThunk('users/delete', async (userId: string) => {
  try {
    await api.delete(`/api/users/${userId}`)
    return userId
  } catch (error) {
    console.log('👀 ', error)
  }
})
export const grantRoleUserThunk = createAsyncThunk(
  'users/role',
  async ({ role, userId }: { role: Role; userId: User['_id'] }) => {
    try {
      const res = await api.put('/api/users/role', {
        role,
        userId
      })

      return res.data.user
    } catch (error) {
      console.log('👀 ', error)
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload
    },
    // use this if you DON't WANT TO USE getUsersThunk
    usersSuccess: (state, action) => {
      state.items = action.payload
    }
  },
  // Do this if you want a proper way of handling requests
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginThunk.rejected, (state, action) => {
      const errorMsg = action.payload

      if (typeof errorMsg === 'string') {
        state.error = errorMsg
      }
      state.isLoading = false
      return state
    })
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.isLoading = false
      return state
    })
    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      state.items = action.payload
      return state
    })
    builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
      const userId = action.payload
      const updatedUsers = state.items.filter((user) => user._id !== userId)
      state.items = updatedUsers
      return state
    })
    builder.addCase(grantRoleUserThunk.fulfilled, (state, action) => {
      const updatedUser = action.payload
      const userId = updatedUser._id

      const updatedUsers = state.items.map((user) => {
        if (user._id === userId) {
          return updatedUser
        }
        return user
      })
      state.items = updatedUsers
      return state
    })
  }
})
export const { loginSuccess, usersSuccess } = userSlice.actions

export default userSlice.reducer
