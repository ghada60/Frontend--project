import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { AppDispatch, RootState } from '../redux/store'
import { ProductForm } from '../components/ProductForm'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Product, updateProductThunk } from '../redux/slices/products/productSlice'
import { Link } from 'react-router-dom'

export function EditProduct() {
  const dispatch = useDispatch<AppDispatch>()
  const params = useParams()
  const productId = params.productId
  const products = useSelector((state: RootState) => state.products)
  console.log('products:', products)
  const product = products.items.find((product) => product._id === String(productId))

  const [updatedProduct, setUpdatedProduct] = useState<Product | undefined>(product)

  if (!updatedProduct || !productId) {
    return <h1>No product found</h1>
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const isList = name === 'categories'
    if (isList) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setUpdatedProduct({
        ...product
        // [name]: value.split(',')
      })
      return
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setUpdatedProduct({
      ...product,
      [name]: value
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    dispatch(updateProductThunk({ productId, updatedProduct }))

    //   dispatch(updateProductThunk (product : product?._id , updatedProduct : updatedProduct))
    return
  }

  return (
    <div>
      <h1>Edit Product</h1>
      <Link to="/dashboard">Go back to Dashboard</Link>
      <ProductForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        product={updatedProduct}
      />
    </div>
  )
}
