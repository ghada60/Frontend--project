// import axios from 'axios'

// const isDevelopment = import.meta.env.MODE === 'development'
// const baseURL = import.meta.env.VITE_BACKEND_ORIGIN

// const api = axios.create({
//   baseURL
// })

// export default api

import axios from 'axios'
import { getTokenFromStorage } from '../utils/token'

const isDevelopment = import.meta.env.MODE === 'development'
const BASE_URL = import.meta.env.VITE_BACKEND_ORIGIN || 'http://localhost:5050'

// if (!isDevelopment) {
//   // Update this later when you have a working backend server
//   baseURL = 'https://sda-onsite-mern-backend-project-rho.vercel.app'
// }

const api = axios.create({
  baseURL: BASE_URL
})

const token = getTokenFromStorage()

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}

export default api
