import { ChangeEvent, FormEvent } from 'react'
import { Product } from '../redux/slices/products/productSlice'

type ProductFormProps = {
  product: Product
  handleSubmit: (e: FormEvent) => void
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function ProductForm({ product, handleSubmit, handleChange }: ProductFormProps) {
  const inputStyle =
    'w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:border-blue-400'
  const labelStyle = 'block text-sm font-medium text-gray-600'

  // function handleSubmit(productName: string): void {
  //   throw new Error('Function not implemented.')
  // }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className={labelStyle}>
          Name:
        </label>
        <input
          type="text"
          name="productName"
          id="name"
          value={product.productName}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className={labelStyle}>
          Image URL:
        </label>
        <input
          type="text"
          name="productImage"
          id="image"
          value={product.productImage}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className={labelStyle}>
          Description:
        </label>
        <textarea
          name="productDescription"
          id="description"
          value={product.productDescription}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>
      <button onClick={handleSubmit} type="submit" className="bg-[#817dca] text-white">
        Add Product
      </button>
    </form>
  )
}
