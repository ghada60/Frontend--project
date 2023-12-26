// import React from 'react'
// import { useSelector } from 'react-redux'
// import { RootState } from '../redux/store'
import Card_Product from '../pages/Card_Product'
// import { Product } from '../redux/slices/products/productSlice'
// export default function CartPage() {
//   const cart: Product[] = useSelector((state: RootState) => state.users.cart)
//   const total: number = cart.reduce((total, product) => total + product.productPrice, 0)
//   return (
//     <div className="container mx-auto mt-10">
//       <div className="flex shadow-md my-10">
//         <div className="w-3/4 bg-black px-10 py-10">
//           <div className="flex justify-between border-b pb-8">
//             <h1 className="font-semibold text-2xl">Shopping Cart</h1>
//             <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
//           </div>
//           <div className="flex mt-10 mb-5">
//             <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
//             <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
//               Quantity
//             </h3>
//             <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
//               Price
//             </h3>
//             <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
//               Total
//             </h3>
//           </div>

//           {cart.map((product) => (
//             <Card_Product key={product._id + 'Card_Product'} product={product} />
//           ))}
//         </div>
//         <div id="summary" className="w-1/4 px-8 py-10">
//           <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
//           <div className="flex justify-between mt-10 mb-5">
//             <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
//             <span className="font-semibold text-sm">{total} SAR</span>
//           </div>

//           <div className="border-t mt-8">
//             <div className="flex font-semibold justify-between py-6 text-sm uppercase">
//               <span>Total cost</span>
//               <span>{total} SAR</span>
//             </div>
//             <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { removeFromCart } from '../redux/slices/cart/cartSlice'
import { AppDispatch, RootState } from '../redux/store'

export function Cart() {
  const dispatch = useDispatch<AppDispatch>()
  const cart = useSelector((state: RootState) => state.cart)

  return (
    // <div className="h-screen shadow-lg rounded-lg w-full py-12">
    //   <div className="col-span-2 p-5">
    //     <h1 className="text-xl font-medium ">Shopping Cart</h1>

    //     {cart.map((item) => (
    //       <div
    //         className="flex justify-between items-center mt-6 pt-6 border-t"
    //         key={item.productName}>
    //         <div className="flex  items-center">
    //           <img
    //             src={item.productImage}
    //             width="60"
    //             className="rounded-full "
    //             alt={item.productName}
    //           />

    //           <div className="flex flex-col ml-3 ">
    //             <span className="text-md font-medium">{item.productName}</span>
    //             <span className="text-xs font-light text-gray-400">{item.productDescription}</span>
    //           </div>
    //         </div>

    //         <div className="flex justify-center items-center">
    //           <div className="pr-8">
    //             <span className="text-xs font-medium">$10.00</span>
    //           </div>
    //           <div>
    //             <i className="fa fa-close text-xs font-medium"></i>
    //           </div>
    //         </div>
    //         <button
    //           onClick={() => {
    //             dispatch(removeFromCart(item._id))
    //           }}>
    //           Delete
    //         </button>
    //       </div>
    //     ))}

    //     <div className="flex justify-between items-center mt-6 pt-6 border-t">
    //       <div className="flex items-center">
    //         <i className="fa fa-arrow-left text-sm pr-2"></i>
    //         <Link to="/">
    //           <span className="text-md  font-medium text-blue-500">Continue Shopping</span>
    //         </Link>
    //       </div>

    //       <div className="flex justify-center items-end">
    //         <span className="text-sm font-medium text-white mr-1">Subtotal:</span>
    //         <span className="text-lg font-bold text-white ">$24.90</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        {' '}
        <div className="w-3/4 bg-black px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>

          {cart.map((product) => (
            <Card_Product key={product._id + 'Card_Product'} product={product} />
          ))}
        </div>
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
          </div>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
