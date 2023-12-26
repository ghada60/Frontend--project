import { useDispatch } from 'react-redux'

import { Role, User, deleteUserThunk, grantRoleUserThunk } from '../redux/slices/users/userSlice'
import { AppDispatch } from '../redux/store'
import { ROLES } from '../contasts'
import { ChangeEvent } from 'react'

export function UserTable({ users }: { users: User[] }) {
  const dispatch = useDispatch<AppDispatch>()
  const handleDeleteUser = (id: string) => {
    console.log('id:', id)

    // Distapch delete user Thunk
    dispatch(deleteUserThunk(id))
  }

  const handleGrantRole = (e: ChangeEvent<HTMLSelectElement>, userId: User['_id']) => {
    const role = e.target.value as Role

    dispatch(grantRoleUserThunk({ role, userId }))
  }
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Is Active
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Grant Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                    <td className="whitespace-nowrap px-6 py-4">{user._id}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {user.isActive ? 'activated' : 'inactive'}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{user.role}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <select
                        name="roles"
                        title="roles"
                        onChange={(e) => handleGrantRole(e, user._id)}>
                        <option>Select Role</option>
                        {Object.keys(ROLES).map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                      <button
                        className="bg-[#817dca] text-white"
                        onClick={() => handleDeleteUser(user._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
