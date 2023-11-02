import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import React from 'react'
import { userAction } from '../redux/slices/UserSlice'

export default function UserCard() {
  const users = useSelector((state: RootState) => state.users.users)
  const dispatch = useDispatch()
  return (
    <section className="max-w-2xl mx-auto px-4">
      <h1 className="text-center text-xl font-extrabold sm:text-2xll">Users</h1>
      <div className="mt-12 divide-y"></div>
      <div className="users-start justify-between sm:flex">
        <div>
          <h4 className="text-gray-800 text-xl font-semibold">users in our platform</h4>
          <p className="mt-2 text-gray-600 text-base sm:text-sm">list all users, delete users</p>
        </div>
      </div>
      <ul className="mt-12 divide-y">
        {users.map((user, idx) => (
          <li key={idx} className="py-5 flex users-start justify-between">
            <div className="flex gap-3">
              <img src={user.avatar} className="flex-none w-12 h-12 rounded-full" />
              <div>
                <span className="block text-sm text-gray-700 font-semibold">
                  {user.firstName + ' ' + user.lastName}
                </span>
                <span className="block text-sm text-gray-600">{user.email}</span>
              </div>
            </div>
            <button
              onClick={() => {
                dispatch(userAction.removeUser(user.id))
              }}
              className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 bg-white hover:bg-red-100 hover:border-red-500">
              delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
