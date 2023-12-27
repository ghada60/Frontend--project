import { useDispatch } from 'react-redux'
import {
  Product,
  deleteProductThunk,
  updateProductThunk
} from '../redux/slices/products/productSlice'
import { AppDispatch } from '../redux/store'

export function ProductsTable({ products }: { products: Product[] }) {
  const dispatch = useDispatch<AppDispatch>()

  const handleDeleteProduct = (productId: string) => {
    console.log('id:', productId)
    dispatch(deleteProductThunk(productId))
  }

  const handleCreateProduct = (productId: string) => {
    console.log('id:', productId)
    dispatch(ProductThunk(productId))
  }

  const handleUpdateProduct = (productId: Product['_id']) => {
    console.log('👀 ', productId)
    const updatedProduct = {
      productName: 'try try '
    }
    dispatch(updateProductThunk({ productId, updatedProduct }))
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product._id}
                    className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4">{product.productName}</td>

                    <td className="whitespace-nowrap px-6 py-4">{product.productDescription}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button onClick={() => handleUpdateProduct(product._id)}>Update</button>

                      <button
                        className="bg-[#817dca] text-white"
                        onClick={() => handleDeleteProduct(product._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
function ProductThunk(productId: string): any {
  throw new Error('Function not implemented.')
}
