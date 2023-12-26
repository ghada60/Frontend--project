import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
import { store } from './redux/store'
import { Dashboard } from './pages/Dashboard'
import './index.css'
import { RouterProvider } from 'react-router'
import { EditProduct } from './pages/EditProduct'
import { Products } from './pages/Products'
import { Register } from './pages/Register'
import { Login } from './pages/LogIn'
import ProductsDetails from './pages/ProductsDetails'
import { Cart } from './components/Cart'
const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/cart',

    element: <Cart />
  },
  {
    path: '/',
    element: <Products />
  },
  {
    path: '/products/edit/:productId',
    element: <EditProduct />
  },
  {
    path: '/products/:productId',
    element: <ProductsDetails />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
