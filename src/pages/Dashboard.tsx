import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../redux/store'
import { getUsersThunk } from '../redux/slices/users/userSlice'
import { UserTable } from '../components/UserTable'
import { createProductThunk, getProductsThunk } from '../redux/slices/products/productSlice'
import { ProductsTable } from '../components/ProductsTable'
import { ProductForm } from '../components/ProductForm'

export function Dashboard() {
  const dispatch = useDispatch<AppDispatch>()
  const [product, setProduct] = useState({
    _id: '',
    productName: '',
    productImage: '',
    productDescription: '',
    category: [],
    productPrice: 0
  })
  const state = useSelector((state: RootState) => state)
  const users = state.users
  const products = state.products
  console.log('products:', products)

  useEffect(() => {
    dispatch(getUsersThunk())
    dispatch(getProductsThunk())
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value
    })
  }
  const handleSubmit = (e: FormEvent<Element>) => {
    e.preventDefault()
    dispatch(createProductThunk(product))
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h2 className="text-2xl m-14">Products</h2>
      <ProductsTable products={products.items} />
      <ProductForm product={product} handleSubmit={handleSubmit} handleChange={handleChange} />
      <h2 className="text-2xl m-14">Users</h2>
      <UserTable users={users.items} />
    </div>
  )
}
