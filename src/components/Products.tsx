import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { setProduct } from '../redux/slices/products/productSlice'
// import ProductsDetails from './ProductsDetails'
import { Product } from '../redux/slices/products/productSlice'
import { userAction } from '../redux/slices/UserSlice'
import productSlice from '../redux/slices/products/productSlice'
import axios from 'axios'
import { userSlice } from '../redux/slices/products/productSlice'
import { categoryAction } from '../redux/slices/categorySlice'
import {
  productsRequest,
  productsSuccess
  // removeProduct
} from '../redux/slices/products/productSlice'
import { AppDispatch, RootState } from '../redux/store'
// import { NewProductWrapper } from './NewProductWrapper'
import api from '../api'
import { Link } from 'react-router-dom'
// import { selectedCategoryId } from '../redux/slices/categorySlice'
// import { categoryAction } from '../redux/slices/categorySlice'

export default function Products() {
  const url = '/mock/e-commerce/products.json'
  const selectedId = useSelector((state: RootState) => state.categories.selectedCategoryId)

  //   const productSearch = useSelector((state: RootState) => state.products.items)
  //   const isLoading = useSelector((state: RootState) => state.products.isLoading)
  //   const error = useSelector((state: RootState) => state.products.error)
  //   // const dispatch = useDispatch<AppDispatch>()
  //   const state = useSelector((state: RootState) => state)

  //   const products = state.products

  //   const dispatch = useDispatch()

  //   useEffect(() => {
  //     function fetchData() {
  //       axios
  //         .get(url)
  //         .then((response) => dispatch(userSlice.actions.productsSuccess(response.data)))
  //         .catch((error) => console.log(userSlice.actions.getError(error.message)))
  //     }

  //     fetchData()
  //   }, [dispatch])

  //   const [search, setSearch] = useState('')

  //   if (isLoading === true) {
  //     return <p>loading...</p>
  //   }

  //   if (error) {
  //     return <div> {error}</div>
  //   }

  //   useEffect(() => {
  //     handleGetProducts()
  //   }, [])

  //   /**
  //    * If you want to keep things simple you can follow this approach on updating
  //    * redux state when using async requests instead of using createAsyncThunk
  //    */
  //   const handleGetProducts = async () => {
  //     // let's first turn the loader to true so we can have a better UX
  //     dispatch(productsRequest())

  //     // Fetching from the local files
  //     const res = await api.get('/mock/e-commerce/products.json')
  //     // At this point we have the data so let's update the store
  //     dispatch(productsSuccess(res.data))
  //     return (
  //       <div>
  //         <form>
  //           <input
  //             id="outlined-basic"
  //             placeholder="search by company name"
  //             type="text"
  //             onChange={(e) => setSearch(e.target.value)}
  //           />
  //         </form>
  //       </div>
  //     )
  //   }

  //   const filterProductByCategory = (selectedCategoryOp: number) => {
  //     return (
  //       <div className="bg-white">
  //         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  //           <h2 className="sr-only">Products</h2>
  //           {products.isLoading && <h3>Loading products...</h3>}
  //           <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
  //             {products.items.map((product) => (
  //               <a href="#" className="group" key={product.id}>
  //                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
  //                   <img
  //                     src={product.image}
  //                     alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
  //                     className="h-full w-full object-cover object-center group-hover:opacity-75"
  //                   />
  //                 </div>
  //                 <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
  //                 <h4 className="mt-4 text-sm text-gray-700">{product.Price} SAR</h4>
  //                 <Link to={`products/${product.id}`}>
  //                   <button
  //                     // onClick={() => dispatch(setProduct(product))}
  //                     className="mt-1 text-lg font-medium text-white-900">
  //                     More details
  //                   </button>
  //                 </Link>

  //                 <button
  //                   onClick={() => dispatch(addToCart(product))}
  //                   className="mt-1 text-lg font-medium text-white-900">
  //                   add to cart
  //                 </button>
  //               </a>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     )
  //   }

  //   productSearch
  //     .filter((product) => {
  //       return search.toLocaleLowerCase() === '' ? product : product.name.includes(search)
  //     })
  //     .map((product: Product) => {
  //       return (
  //         <div>
  //           <div key={product.id}></div>
  //           <div>
  //             <form>
  //               <input
  //                 id="outlined-basic"
  //                 placeholder="search by company name"
  //                 type="text"
  //                 onChange={(e) => setSearch(e.target.value)}
  //               />
  //             </form>
  //           </div>
  //         </div>
  //       )
  //     })
  // }

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
  // const filterProductsbyCategory = (categoryId: number, productsList: Product[]) => {
  //   if (categoryId === 0) {
  //     return productsList
  //   }
  //   return productsList.filter((product: Product) => {
  //     product.categories.includes(categoryId)
  //   })
  // }

  // const filteredProducts = filterProductsbyCategory(selectedCategoryId, productsList)

  //   const handleCategoryChange = (categoryId: number) => {
  //     dispatch(setSelectedCategory(categoryId))
  //   }
  //   return productsList.filter((product) => product.categories.includes(categoryId as number))
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
          </div>
        </div>
      </div>
    </div>
  )
}
