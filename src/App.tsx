import './App.css'
import Footer from './components/Footer'
import { Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Admin from './components/Admin'
import Cart from './components/Cart'
import ProductsDetails from './components/ProductsDetails'
// import Category from './components/Category'
import { Login } from './components/LogIn'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import { AuthService } from './types/authService'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Category" element={<Category />} /> */}
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
// const PrivateRoute: React.FC<{ component: React.FC; path: string }> = ({ component, path }) => {
//   return AuthService.isAuthenticated() ? (
//     <Route path={path} component={component} />
//   ) : (
//     <Redirect to="/login" />
//   );
// };

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/login" component={Login} />
//         <PrivateRoute path="/protected" component={() => <div>Protected Route</div>} />
//         <Redirect to="/login" />
//       </Switch>
//     </Router>
//   );
// };
