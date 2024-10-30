import React, { useEffect, useState } from "react"
import { IUser } from "../../../types/user.type"
import { UserService } from "../../../service/UserService"
import { UserCard } from "./UserCard"

export const UsersList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    UserService.getAllUsers().then((data) => setUsers(data))
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
