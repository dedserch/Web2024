import React from "react"
import { IUser } from "../../../types/user.type"
import { UserCard } from "./UserCard"

interface UsersListProps {
  users: IUser[]
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
