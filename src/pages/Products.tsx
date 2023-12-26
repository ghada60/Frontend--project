import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProductsThunk } from '../redux/slices/products/productSlice'
import { AppDispatch, RootState } from '../redux/store'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Typography } from '@material-tailwind/react'
import { Category } from './Category'

export function Products() {
  const params = useParams()
  console.log('params:', params)
  const products = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  return (
    <div>
      <div>
        <Navbar />
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Arco?
        </Typography>
        <Typography color="blue-gray" className="font-normal">
          Discuss your project idea and requirements with our business expert. We would analyze and
          derive technical factors to align it with your purpose and scope of your project. This
          will be critical in framing the technological framework, resource engagement, cost
          parameters, and delivery timelines to best compliment your perspective and idea of the
          solution.
          {/* Bring your ideas to life */}
        </Typography>
        <br />
      </div>
      <Category />

      {products.items.map((product) => (
        <div key={product._id}>
          <h1>{product.productName}</h1>

          <img src={product.productImage} alt={product.productName} width={400} />
          <p>{product.productDescription}</p>

          <Link to={`/products/${product._id}`}>details</Link>
        </div>
      ))}
    </div>
  )
}
