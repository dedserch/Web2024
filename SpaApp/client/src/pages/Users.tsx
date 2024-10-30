import React from 'react'
import { UsersList } from '../components/shared/UsersList/UsersList'


export const Users: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <UsersList />
    </div>
  )
}