/* eslint-disable react/no-unescaped-entities */
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../redux/store'

import { login, userSlice, Adminlogin } from '../redux/slices/UserSlice'

export const Login = () => {
  const dispatch: AppDispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users.users)
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: ''
  })

  const url = '/mock/e-commerce/users.json'

  useEffect(() => {
    function fetchData() {
      axios
        .get(url)
        .then((response) => dispatch(userSlice.actions.userSuccess(response.data)))
        .catch((error) => {
          console.log(userSlice.actions.getError(error))
        })
    }

    fetchData()
  }, [dispatch])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const validateForm = () => {
    const errors: any = {}

    if (!user.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = 'Invalid email address'
    }

    if (!user.password) {
      errors.password = 'Password is required'
    }

    setErrorMessage(errors)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    const foundUser = users.find((userData) => userData.email === user.email)

    if (foundUser && foundUser.password === user.password) {
      dispatch(login(foundUser))

      if (foundUser && foundUser.role === 'admin') {
        dispatch(Adminlogin(foundUser))
        navigate('/admin')
      } else {
        navigate('/')
      }
    } else {
      setErrorMessage({ email: 'Incorrect email or password', password: '' })
    }
  }

  return (
    <section className="bg-yellow-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-lime-700 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            {errorMessage.email && <div className="error-message">{errorMessage.email}</div>}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-lime-700 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`bg-gray-50 border border-gray-300 text-lime-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    errorMessage.email ? 'border-red-500' : ''
                  }`}
                  placeholder="name@company.com"
                  onChange={handleInputChange}
                  value={user.email}
                />
              </div>
              {errorMessage.email && (
                <div className="text-red-500 text-sm">{errorMessage.email}</div>
              )}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-lime-700 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  className={`bg-gray-50 border border-gray-300 text-lime-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    errorMessage.password ? 'border-red-500' : ''
                  }`}
                  placeholder="••••••••"
                  onChange={handleInputChange}
                />
              </div>
              {errorMessage.password && (
                <div className="text-red-500 text-sm">{errorMessage.password}</div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-lime-700 hover:underline dark:text-primary-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-lime-800 bg-primary-800 hover:bg-primary-700 focus:ring-2 focus:outline-none focus:ring-primary-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-800 dark:focus:ring-primary-800">
                Sign in
              </button>
              <p className="text-sm font-light text-lime-700 dark:text-gray-400">
                Don't have an account yet?{' '}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
