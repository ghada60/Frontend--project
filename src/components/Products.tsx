import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userAction } from '../redux/slices/UserSlice'

import axios from 'axios'

import {
  productsRequest,
  productsSuccess
  // removeProduct
} from '../redux/slices/products/productSlice'
import { RootState } from '../redux/store'
// import { NewProductWrapper } from './NewProductWrapper'
import api from '../api'
import { Link } from 'react-router-dom'
import { ProductsManager } from './ProductsManager'
// import { selectedCategoryId } from '../redux/slices/categorySlice'
// import { categoryAction } from '../redux/slices/categorySlice'

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const totalPages = filteredItems.length / itemsPerPage
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  const url = '/mock/e-commerce/products.json'
  const selectedId = useSelector((state: RootState) => state.categories.selectedCategoryId)

  let productSearch = useSelector((state: RootState) => state.products.items)
  if (selectedId > 0) {
    productSearch = productSearch.filter((product) => product.categories.includes(selectedId))
  }
  const isLoading = useSelector((state: RootState) => state.products.isLoading)
  const error = useSelector((state: RootState) => state.products.error)
  const products = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchData() {
      dispatch(productsRequest())

      try {
        const response = await axios.get(url)
        dispatch(productsSuccess(response.data))
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [dispatch])

  if (isLoading) {
    return <p>loading...</p>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <form>
        <input
          id="outlined-basic"
          placeholder="search by name"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          {products.isLoading && <h3>Loading products...</h3>}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
            {productSearch
              .filter((product) => product.name.toLowerCase().includes(search))
              .map((product) => (
                <a href="#" className="group" key={product.id}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.image}
                      alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <h4 className="mt-4 text-sm text-gray-700">{product.Price} SAR</h4>
                  <Link to={`products/${product.id}`}>
                    <button className="mt-1 text-lg font-medium text-white-900">
                      More details
                    </button>
                  </Link>
                  <button
                    onClick={() => dispatch(userAction.addToCart(product))}
                    className="mt-1 text-lg font-medium text-white-900">
                    Add to cart
                  </button>
                </a>
              ))}
            {Array.from({ length: totalPages }, (_, index) => {
              return (
                <button
                  key={index + 1}
                  onClick={() => {
                    handlePageChange(index + 1)
                  }}
                  style={{
                    backgroundColor: currentPage === index + 1 ? 'blue' : ''
                  }}>
                  {index + 1}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
