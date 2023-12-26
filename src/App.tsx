// import './App.css'

// import { BrowserRouter as Router, Route } from 'react-router-dom'

// import './App.css'

// import { Typography } from '@material-tailwind/react'
// // import Category from './components/Category'
// import { ChangeEvent, useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import Navbar from './components/Navbar'
// import { productsRequest, productsSuccess } from './redux/slices/products/productSlice'
// import { addToCart } from './redux/slices/cart/cartSlice'

// import { AppDispatch, RootState } from './redux/store'
// import api from './api'
// import { Link } from 'react-router-dom'
// import { Category } from './types/Category'
// export function App() {
//   const dispatch = useDispatch<AppDispatch>()
//   const [categories, setCategories] = useState<Category[]>([])
//   const [currentCategory, setCurrentCategory] = useState<null | number>(null)
//   console.log('currentCategory:', currentCategory)

//   const state = useSelector((state: RootState) => state)
//   const products = state.products
//   const cart = state.cart

//   // filter By category
//   let filteredItems = products.items
//   if (currentCategory) {
//     filteredItems = products.items.filter((product) => {
//       return product.category.some((category) => category === currentCategory)
//     })
//   }
//   // Pagination setup
//   const [currentPage, setCurrentPage] = useState(1)
//   const itemsPerPage = 3
//   const totalPages = filteredItems.length / itemsPerPage
//   const indexOfLastItem = currentPage * itemsPerPage
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage

//   // change the filteredItems with products.items if you don't want to have a filter category
//   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)

//   useEffect(() => {
//     handleGetProducts()
//     handleGetCategories()
//   }, [])

//   const handleGetProducts = async () => {
//     dispatch(productsRequest())
//     const res = await api.get('/api/products')
//     console.log('res:', res.data)
//     dispatch(productsSuccess(res.data.items))
//   }

//   const handleGetCategories = async () => {
//     dispatch(productsRequest())
//     const res = await api.get('/mock/e-commerce/categories.json')
//     setCategories(res.data)
//   }

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page)
//   }
//   const handleSelectCategory = (e: ChangeEvent<HTMLSelectElement>) => {
//     const categoryId = e.target.value
//     setCurrentCategory(Number(categoryId))
//   }
//   return (
//     <div className="App">
//       <div>
//         <Navbar />

//         <Typography variant="h2" color="blue-gray" className="mb-2">
//           What is Arco?
//         </Typography>
//         <Typography color="blue-gray" className="font-normal">
//           Discuss your project idea and requirements with our business expert. We would analyze and
//           derive technical factors to align it with your purpose and scope of your project. This
//           will be critical in framing the technological framework, resource engagement, cost
//           parameters, and delivery timelines to best compliment your perspective and idea of the
//           solution.
//           {/* Bring your ideas to life */}
//         </Typography>
//         <br />
//       </div>

//       <Link to="/checkout">Go to cart ({cart.length})</Link>
//       <select name="categories" title="categories" id="cars" onChange={handleSelectCategory}>
//         {categories.map((cat) => {
//           return (
//             <option key={cat.id} value={cat.id}>
//               {cat.name}
//             </option>
//           )
//         })}
//       </select>
//       <ul>
//         {currentItems.map((product) => {
//           return (
//             <li key={product._id}>
//               <span>{product.productName}</span>
//               <button
//                 onClick={() => {
//                   dispatch(addToCart(product))
//                 }}>
//                 Add to cart
//               </button>
//               <Link to={`/products/${product._id}`}>Details</Link>
//             </li>
//           )
//         })}
//       </ul>
//       {Array.from({ length: totalPages }, (_, index) => {
//         return (
//           <button
//             key={index + 1}
//             onClick={() => {
//               handlePageChange(index + 1)
//             }}
//             style={{
//               backgroundColor: currentPage === index + 1 ? 'red' : ''
//             }}>
//             {index + 1}
//           </button>
//         )
//       })}
//     </div>
//   )
// }
// export default App
// // const PrivateRoute: React.FC<{ component: React.FC; path: string }> = ({ component, path }) => {
// //   return AuthService.isAuthenticated() ? (
// //     <Route path={path} component={component} />
// //   ) : (
// //     <Redirect to="/login" />
// //   )
// // }

// // const App: React.FC = () => {
// //   return (
// //     <Router>
// //       <Switch>
// //         <Route path="/login" component={Login} />
// //         <PrivateRoute path="/protected" component={() => <div>Protected Route</div>} />
// //         <Redirect to="/login" />
// //       </Switch>
// //     </Router>
// //   )
// // }

// // function App() {
// //   return (
// //     <div>
// //       <Navbar />

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         {/* <Route path="/Category" element={<Category />} /> */}
// //         <Route path="/products/:id" element={<ProductsDetails />} />
// //         <Route path="/Admin" element={<Admin />} />
// //         <Route path="/Login" element={<Login />} />
// //         <Route path="/Cart" element={<Cart />} />
// //         <Route path="/Register" element={<Register />} />
// //         <Route path="/Dashboard" element={<Dashboard />} />
// //       </Routes>

// //       <Footer />
// //     </div>
// //   )
// // }
