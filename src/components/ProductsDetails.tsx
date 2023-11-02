import productSlice from '../redux/slices/products/productSlice'
import { useParams } from 'react-router-dom'
import React from 'react'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import Products from './Products'

export default function ProductsDetails() {
  const { id } = useParams<{ id: string }>()
  const products = useSelector((state: RootState) =>
    state.products.items.find((prod) => prod.id.toString() === id)
  )
  const selectedProduct = products
  // const selectedProduct = useSelector((state: RootState) => state.products.selectedProduct)
  return (
    <div>
      <div>
        <div className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Our Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                  <img
                    className="h-60 w-1500 object-cover object-center group-hover:opacity-75"
                    src={products?.image}
                    alt="Product"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">{products?.name}</h3>
                <p className="text-gray-500 text-sm mt-2">{products?.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-900 font-bold text-lg">{products?.Price}</span>
                  {/* <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
