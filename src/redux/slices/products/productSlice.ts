// import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// export type Product = {
//   id: number
//   name: string
//   image: string
//   description: string
//   Price: number
//   categories: number[]
//   // variants: string[]
//   // sizes: string[]
// }

// export type ProductState = {
//   items: Product[]
//   error: null | string
//   isLoading: boolean
//   cart: Product[]

//   // selectedProduct: Product
// }

// const initialState: ProductState = {
//   items: [],
//   error: null,
//   isLoading: false,
//   cart: []
//   // selectedProduct: {} as Product
// }

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     productsRequest: (state) => {
//       state.isLoading = true
//     },
//     productsSuccess: (state, action) => {
//       state.isLoading = false
//       state.items = action.payload
//     },
//     addProduct: (state, action: { payload: { product: Product } }) => {
//       // let's append the new product to the beginning of the array
//       state.items = [action.payload.product, ...state.items]
//     },
//     removeProduct: (state, action: { payload: { productId: number } }) => {
//       const filteredItems = state.items.filter((product) => product.id !== action.payload.productId)
//       state.items = filteredItems
//     },
//     addToCart: (state, action: PayloadAction<Product>) => {
//       state.cart = [...state.cart, action.payload]
//       console.log(state.cart)
//     },
//     getError: (state, action: PayloadAction<string>) => {
//       state.error = action.payload
//     }

//     // setProduct: (state, action) => {
//     //   state.selectedProduct = action.payload
//     //   console.log(action.payload)
//     // }
//   }
// })
// export const { removeProduct, addProduct, productsRequest, productsSuccess, addToCart, getError } =
//   userSlice.actions

// export default userSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export type Product = {
  id: number
  name: string
  image: string
  description: string
  categories: number[]
  Price: number
  //   variants: string[]
  //   sizes: string[]
}

export type ProductState = {
  items: Product[]
  error: null | string
  isLoading: boolean
}

const initialState: ProductState = {
  items: [],
  error: null,
  isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      const updatedProduct = action.payload

      const products = state.items.map((product) => {
        if (product.id === updatedProduct.id) {
          return updatedProduct
        }
        return product
      })
      state.items = products
      console.log('products:', products)
      return state
    },
    productsRequest: (state) => {
      state.isLoading = true
    },
    productsSuccess: (state, action) => {
      state.isLoading = false
      state.items = action.payload
    },
    addProduct: (state, action: { payload: { product: Product } }) => {
      // let's append the new product to the beginning of the array
      state.items = [action.payload.product, ...state.items]
    },
    editProduct: (state, action: { payload: { editedProduct: Product } }) => {
      const editedProduct = action.payload.editedProduct

      state.items = state.items.map((product) =>
        product.id === editedProduct.id ? editedProduct : product
      )
    },
    removeProduct: (state, action: { payload: { productId: number } }) => {
      const filteredItems = state.items.filter((product) => product.id !== action.payload.productId)
      state.items = filteredItems
    }
  }
})
export const {
  removeProduct,
  addProduct,
  productsRequest,
  productsSuccess,
  updateProduct,
  editProduct
} = userSlice.actions

export default userSlice.reducer
