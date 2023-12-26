// import { ChangeEvent, FormEvent, useState } from 'react'
// import api from '../api'
// import { AxiosError } from 'axios'

// export function Register() {
//   const [credentials, setCredentials] = useState({
//     FirstName: '',
//     LastName: '',
//     email: '',
//     password: ''
//   })
//   const [error, setError] = useState<null | string>(null)
//   const [success, setSuccess] = useState<null | string>(null)
//   const [loading, setLoading] = useState(false)

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target

//     setCredentials({
//       ...credentials,
//       [name]: value
//     })
//   }
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault()
//     try {
//       setLoading(true)
//       const res = await api.post('/api/auth/register', credentials)

//       setSuccess(res.data.msg)
//       setError(null)
//       // TODO: Redirect to LOGIN PAGE
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         const errorMsg = error.response?.data.msg
//         if (typeof errorMsg == 'string') {
//           setError(errorMsg)
//         }
//         if (Array.isArray(errorMsg)) {
//           const errorsAsStr = errorMsg.map((err) => err.message)
//           setError(errorsAsStr.join(', '))
//         }
//         setSuccess(null)
//       }
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div>
//       <form className="flex flex-col" onSubmit={handleSubmit}>
//         <div>
//           <label className="mb-4">First Name</label>
//           <input type="text" className="mb-4" onChange={handleChange} />
//         </div>

//         <div>
//           <label className="mb-4">Last Name</label>
//           <input type="text" className="mb-4" onChange={handleChange} />
//         </div>

//         <div className="mb-4">
//           <label>Email</label>
//           <input type="text" name="email" title="email" onChange={handleChange} />
//         </div>
//         <div className="mb-4">
//           <label>Password</label>
//           <input type="password" name="password" title="password" onChange={handleChange} />
//         </div>
//         <button>{loading ? 'Regitering...' : 'Register'}</button>
//       </form>
//       {error && <p className="text-red-600">{error}</p>}
//       {success && <p className="text-green-600">{success}</p>}
//     </div>
//   )
// }

import { ChangeEvent, FormEvent, useState } from 'react'
import api from '../api'
import { AxiosError } from 'axios'

export function Register() {
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState<null | string>(null)
  const [success, setSuccess] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await api.post('/api/auth/register', credentials)

      setSuccess(res.data.msg)
      setError(null)
      // TODO: Redirect to LOGIN PAGE
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data.msg
        if (typeof errorMsg === 'string') {
          setError(errorMsg)
        }
        if (Array.isArray(errorMsg)) {
          const errorsAsStr = errorMsg.map((err: any) => err.message)
          setError(errorsAsStr.join(', '))
        }
        setSuccess(null)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div>
          <label className="mb-4">First Name</label>
          <input
            type="text"
            name="firstName"
            className="mb-4"
            onChange={handleChange}
            value={credentials.firstName}
          />
        </div>

        <div>
          <label className="mb-4">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="mb-4"
            onChange={handleChange}
            value={credentials.lastName}
          />
        </div>

        <div className="mb-4">
          <label>Email</label>
          <input
            type="text"
            name="email"
            title="email"
            onChange={handleChange}
            value={credentials.email}
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            type="password"
            name="password"
            title="password"
            onChange={handleChange}
            value={credentials.password}
          />
        </div>
        <button>{loading ? 'Registering...' : 'Register'}</button>
      </form>
      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
    </div>
  )
}
