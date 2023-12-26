// import { configureStore } from '@reduxjs/toolkit'
// import productsReducer from './slices/products/productSlice'
// import userReducer from './slices/users/UserSlice'
// import categoryReducer from './slices/categorySlice'

// export const store = configureStore({
//   reducer: {
//     products: productsReducer,
//     users: userReducer,
//     categories: categoryReducer
//   }
// })
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/products/productSlice'
import cartReducer from './slices/cart/cartSlice'
import usersReducer from './slices/users/userSlice'
import categoryReducer from './slices/category/categorySlice'
export const store = configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    categories: categoryReducer,
    cart: cartReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
