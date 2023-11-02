// // import React from 'react'
// // import { useEffect } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'

// // import {
// //   categoryRequest,
// //   categorySuccess
// //   // removeProduct
// // } from '../redux/slices/categorySlice'
// // import { AppDispatch, RootState } from '../redux/store'

// // import api from '../api'
// // import { Link } from 'react-router-dom'

// // export default function Category() {
// //   const dispatch = useDispatch<AppDispatch>()
// //   const state = useSelector((state: RootState) => state)
// //   const category =useSelector((state: RootState) => state.categories)
// //   useEffect(() => {
// //     handleGetCategory()
// //   }, [])

// //   /**
// //    * If you want to keep things simple you can follow this approach on updating
// //    * redux state when using async requests instead of using createAsyncThunk
// //    */
// //   const handleGetCategory = async () => {
// //     // let's first turn the loader to true so we can have a better UX
// //     dispatch(categoryRequest())

// //     // Fetching from the local files
// //     const res = await api.get('/mock/e-commerce/category.json')
// //     // At this point we have the data so let's update the store
// //     dispatch(categorySuccess(res.data))
// //   }

// //   return (
// //     <div className="bg-white">
// //       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
// //         <h2 className="sr-only">Products</h2>
// //         {category.isLoading && <h3>Loading products...</h3>}
// //         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
// //           {category.items.map((category) => (
// //             <a href="#" className="group" key={category.id}>
// //               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"></div>
// //               <h3 className="mt-4 text-sm text-gray-700">{category.name}</h3>
// //               <Link to={`products/${category.id}`}>
// //                 <button className="mt-1 text-lg font-medium text-white-900">category</button>
// //               </Link>
// //             </a>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { categoryAction } from '../redux/slices/categorySlice'
// import { AppDispatch, RootState } from '../redux/store'
// import styles from './Category.module.css'
// // import { NewProductWrapper } from './NewProductWrapper'
// import api from '../api'
// import axios from 'axios'
// // import CategoriesForm from './CategoriesForm'
// export function Category() {
//   const dispatch = useDispatch<AppDispatch>()
//   const state = useSelector((state: RootState) => state.categories)
//   const categories = state.categories
//   const isLoading = state.isLoading
//   useEffect(() => {
//     handleGetCategories()
//   }, [])
//   /**
//    * If you want to keep things simple you can follow this approach on updating
//    * redux state when using async requests instead of using createAsyncThunk
//    */
//   // const handleGetCategories = () => {}

//   // const categoryList = useSelector((state: RootState) => state.categories.categories)
//   // useEffect(() => {
//   //   async function fetchData() {
//   //     dispatch(categoryAction.categoriesRequest())

//   //     try {
//   //       const url = '/mock/e-commerce/categories.json'
//   //       const response = await axios.get(url)
//   //       dispatch(categoryAction.categoriesSuccess(response.data))
//   //     } catch (error) {
//   //       console.log(error)
//   //     }
//   //   }

//   //   fetchData()
//   // }, [dispatch])
//   return (
//     // <div classNameName="grid grid-cols-1 md:grid-cols-2 w-full">
//     //   {isLoading && <h3> Loading categories...</h3>}
//     //   <div classNameName="card grid gap-4">
//     //     <h1>Category </h1>
//     //     <ul>
//     //       {categories.map((category) => (
//     //         <li key={category.id} classNameName="flex items-center justify-center gap-4 text-2xl mb-2">
//     //           <img src={category.image} width="100" />
//     //           <span>{category.name}</span>
//     //         </li>
//     //       ))}
//     //     </ul>3
//     //   </div>
//     // </div>
//     <div className="container mx-auto p-4 lg:h-screen flex items-center justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
//             <div className="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
//               <h1 className="text-2xl font-semibold">{category.name}</h1>
//               <p className="mt-2">{category.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
