import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { categoryAction } from '../redux/slices/categorySlice'
import CategoryFormUpdate from './CategoryFormUpdate'
import { Category } from '../types/Category'
// import api from '../api'
// let counter = 0
export default function CategoryCard() {
  // const handleGetCategories = async () => {
  //   if (counter == 0) {
  //     console.log(counter)
  //     // Fetching from the local files
  //     const res = await api.get('/mock/e-commerce/categories.json')
  //     // At this point we have the data so let's update the store
  //     dispatch(categoryAction.setCategories(res.data))
  //     counter++
  //   }
  // }
  // useEffect(() => {
  //   handleGetCategories()
  // }, [])
  const categories = useSelector((state: RootState) => state.categories.categories)
  const dispatch = useDispatch()
  console.log(categories)
  return (
    <section className="py-16 bg-white ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className=" mx-auto px-4">
          <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">Categories</h1>
          <div className="items-start justify-between sm:flex">
            <p className="text-gray-600 mt-2">
              In this section you can add a new category, update info of a category, remove a
              category
            </p>
            <CategoryFormUpdate category={{} as Category} />
          </div>
        </div>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.id} className="border rounded-lg">
              <div className="flex items-start justify-between p-4">
                <div className="space-y-2">
                  <h4 className="text-gray-800 font-semibold">{category.name}</h4>
                  {/*<p className="text-gray-600 text-sm">{item.desc}</p>*/}
                </div>
                <CategoryFormUpdate category={category} />
              </div>
              <div className="py-5 px-4 border-t text-right">
                <button
                  onClick={() => {
                    dispatch(categoryAction.removeCategory({ categoryId: category.id }))
                  }}
                  className="text-red-600 hover:text-red-500 text-sm font-medium">
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
