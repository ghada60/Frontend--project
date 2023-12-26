import { useEffect } from 'react'

import { getCategoryThunk } from '../redux/slices/category/categorySlice'
import { AppDispatch, RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'

export function Category() {
  const categories = useSelector((state: RootState) => state.categories)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getCategoryThunk())
  }, [])

  return (
    <div>
      {categories.items.map((category) => (
        <div key={category.categoryName}>
          <h1>{category.categoryName}</h1>
        </div>
      ))}
    </div>
  )
}
