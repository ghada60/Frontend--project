import React, { useEffect, useState } from 'react'
import { Typography } from '@material-tailwind/react'
import { ProductsManager } from '../components/ProductsManager'
import Products from './Products'
// import { categoryAction } from '../redux/slices/categorySlice'
import { categoryAction } from '../redux/slices/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'

import axios from 'axios'

function Home() {
  const dispatch = useDispatch()
  const handleGetCategories = (categoryId: number) => {
    dispatch(categoryAction.setSelectedCategory(categoryId))
  }

  const categoryList = useSelector((state: RootState) => state.categories.categories)
  useEffect(() => {
    async function fetchData() {
      dispatch(categoryAction.categoriesRequest())

      try {
        const url = '/mock/e-commerce/categories.json'
        const response = await axios.get(url)
        dispatch(categoryAction.categoriesSuccess(response.data))
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [dispatch])
  return (
    <div>
      {' '}
      {categoryList.map((category) => {
        return (
          <button
            className="bg-white text-black"
            key={category.id}
            onClick={() => handleGetCategories(category.id)}>
            {category.name}
          </button>
        )
      })}
      <Typography variant="h2" color="blue-gray" className="mb-2">
        What is Arco?
      </Typography>
      <Typography color="blue-gray" className="font-normal">
        Discuss your project idea and requirements with our business expert. We would analyze and
        derive technical factors to align it with your purpose and scope of your project. This will
        be critical in framing the technological framework, resource engagement, cost parameters,
        and delivery timelines to best compliment your perspective and idea of the solution.
      </Typography>
      <br />
      <Products />
    </div>
  )
}

export default Home
