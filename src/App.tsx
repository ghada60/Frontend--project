// import { ProductsManager } from './components/ProductsManager'
import './App.css'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { ProductsManager } from './components/ProductsManager'
import StickyNavbar from './components/StickyNavbar'
import Admin from './components/Admin'

function App() {
  return (
    <div>
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsManager />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
      {/* <ProductsManager /> */}
      <Footer />
    </div>
  )
}

export default App
