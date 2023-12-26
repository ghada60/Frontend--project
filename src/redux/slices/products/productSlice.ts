import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../../api'

export type Product = {
  _id: string
  productName: string
  productImage: string
  productDescription: string
  category: number[]
  productPrice: number
}

export type ProductState = {
  items: Product[]
  product: Product | null
  error: null | string
  isLoading: boolean
}

const initialState: ProductState = {
  items: [],
  product: null,
  error: null,
  isLoading: false
}

// type Withot = Product
// type With = Partial<Product>

export const createProductThunk = createAsyncThunk(
  'products/createProduct',
  async (product: Product) => {
    try {
      console.log(product)
      const res = await api.post(`/api/products/`, product)
      return res.data.payload
    } catch (error) {
      console.log('👀 ', error)
    }
  }
)

export const getProductsThunk = createAsyncThunk('products/get', async () => {
  try {
    const res = await api.get('/api/products')
    console.log('res', res)
    return res.data.payload
  } catch (error) {
    console.log('👀 ', error)
  }
})

export const getProductByIdThunk = createAsyncThunk(
  'products/getById',
  async (productId: string | undefined) => {
    try {
      const res = await api.get(`api/products/${productId}`)
      console.log('res', res)
      return res.data.payload
    } catch (error) {
      console.log('👀 ', error)
    }
  }
)

export const updateProductThunk = createAsyncThunk(
  'products/update',
  async ({
    productId,
    updatedProduct
  }: {
    productId: Product['_id']
    updatedProduct: Partial<Product>
  }) => {
    try {
      const res = await api.put(`api/products/${productId}`, {
        product: updatedProduct
      })

      console.log('updated product:', res.data.product)
      return res.data.product
    } catch (error) {
      console.log('👀 ', error)
    }
  }
)

export const deleteProductThunk = createAsyncThunk('products/delete', async (productId: string) => {
  try {
    const res = await api.delete(`/api/products/${productId}`)
    return res.data
  } catch (error) {
    console.log('👀 ', error)
  }
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.items = action.payload
      return state
    })
    builder.addCase(getProductByIdThunk.fulfilled, (state, action) => {
      state.product = action.payload
      return state
    })

    builder.addCase(updateProductThunk.fulfilled, (state, action) => {
      const updated = action.payload
      console.log('updatedProduct:', updated)
      const updatedProducts = state.items.map((product) => {
        if (product._id === updated._id) {
          return updated
        }
        return product
      })

      state.items = updatedProducts
      return state
    })

    builder.addCase(createProductThunk.fulfilled, (state, action) => {
      state.items = [...state.items, action.payload]
      return state
    })
    builder.addCase(deleteProductThunk.fulfilled, (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload.payload._id)
      return state
    })
  }
})

export default productSlice.reducer
