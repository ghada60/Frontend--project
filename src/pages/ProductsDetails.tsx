import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProductByIdThunk } from '../redux/slices/products/productSlice'
import { AppDispatch, RootState } from '../redux/store'
import { useEffect } from 'react'

export default function ProductsDetails() {
  const params = useParams()
  const productId = params['productId']

  const product = useSelector((state: RootState) => state.products.product)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getProductByIdThunk(productId))
  }, [])

  if (!product) {
    return <h1>404 product not found</h1>
  }

  return (
    <div>
      <h1>{product.productName}</h1>

      <img src={product.productImage} alt={product.productName} width={400} />
      <p>{product.productDescription}</p>

      <Link to="/">Go back</Link>
    </div>
  )
}
