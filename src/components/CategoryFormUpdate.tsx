import React, { ChangeEvent } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useDispatch } from 'react-redux'
import { Category } from '../types/Category'
import { categoryAction } from '../redux/slices/categorySlice'
import { SubmitHandler, useForm } from 'react-hook-form'
// import { Product } from '../../../types/Product'
// import { productAction } from '../../../redux/slices/products/productSlice'

export default function CategoryForm(prop: { category: Category }) {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const inputStyle =
    'w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-400'
  const labelStyle = 'block text-sm font-medium text-gray-600'
  const [category, setNewCategory] = React.useState(prop.category)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Category>()

  const onSubmit: SubmitHandler<Category> = (data) => {
    console.log(data)
    {
      prop.category.id
        ? dispatch(categoryAction.updateCategory({ data: data }))
        : dispatch(categoryAction.addCategory(data))
    }
    setOpen(false)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewCategory({
      ...category,
      [name]: value
    })
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      {prop.category.id ? (
        <button
          onClick={handleClickOpen}
          className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">
          Edit
        </button>
      ) : (
        <button
          onClick={handleClickOpen}
          className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-black hover:bg-black/70 rounded-lg sm:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          add new category
        </button>
      )}

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>edit category</DialogTitle>
          <DialogContent>
            <div className="mb-4">
              <label htmlFor="name" className={labelStyle}>
                Name:
              </label>
              {errors.name && <span className="text-red-500">This field is required</span>}
              <input
                {...register('name', { required: true })}
                value={category.name}
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                className={inputStyle}
              />
            </div>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            {prop.category.id ? (
              <Button type="submit" color="primary">
                update
              </Button>
            ) : (
              <Button type="submit" color="primary">
                save
              </Button>
            )}
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
