// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router'
// import { RootState } from '../redux/store'
// import { ProductForm } from '../components/ProductForm'
// import { ChangeEvent, FormEvent, useState } from 'react'
// import { Product, updateProduct } from '../redux/slices/products/productSlice'
// import { Link } from 'react-router-dom'

// const product: Product = {
//   id: 0,
//   name: '',
//   image: '',
//   description: '',
//   categories: [],
//   Price: 0
//   //   variants: [],
//   //   sizes: []
// }
export function EditProduct() {
  // const dispatch = useDispatch()
  // const params = useParams()
  // const products = useSelector((state: RootState) => state.products)
  // console.log('products:', products)
  // const product = products.items.find((product) => product.id === Number(params.productId))

  // const [updatedProduct, setUpdatedProduct] = useState<Product>(product as Product)

  // if (!updatedProduct) {
  //   return <h1>No product found</h1>
  // }

  //   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //     const { name, value } = e.target
  //     const isList = name === 'categories' || name === 'variants' || name === 'sizes'
  //     if (isList) {
  //       setUpdatedProduct({
  //         ...updatedProduct,
  //         [name]: value.split(',')
  //       })
  //       return
  //     }

  //     setUpdatedProduct({
  //       ...updatedProduct,
  //       [name]: value
  //     })
  //   }
  //   const handleSubmit = (e: FormEvent) => {
  //     e.preventDefault()

  //     dispatch(updateProduct(updatedProduct))
  //     return
  //   }
  //   return (
  //     <div>
  //       <h1>Edit Product</h1>
  //       <Link to="/Admin">Go back to Admin</Link>
  //       <ProductForm
  //         handleSubmit={handleSubmit}
  //         handleChange={handleChange}
  //         product={updatedProduct}
  //       />
  //     </div>
  //   )
  return <div>product</div>
}
