import React from "react"
import { UsersList } from "../../components/shared/UsersList/UsersList"
import { Breadcrumbs } from "../../components/ui/Breadcrumbs"

export const Users: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <UsersList />
    </div>
  )
}
