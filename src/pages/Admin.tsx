// import { Link } from 'react-router-dom'
import { FormEvent, ChangeEvent } from 'react'
import { ProductForm } from '../components/ProductForm'

export default function Admin() {
  return (
    <div>
      <div className="flex">
        {/* <Link to="/users">
          <button>users</button>
        </Link>

        <Link to="/orders">
          <button>orders</button>
        </Link>

        <Link to="/Admincategoris">
          <button>categories</button>
        </Link> */}
      </div>
      <ProductForm
        product={{
          _id: '',
          productName: '',
          productImage: '',
          productDescription: '',
          category: [],
          productPrice: 0
        }}
        handleSubmit={function (e: FormEvent<Element>): void {
          throw new Error('Function not implemented.')
        }}
        handleChange={function (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
          throw new Error('Function not implemented.')
        }}
      />
    </div>
  )
}
