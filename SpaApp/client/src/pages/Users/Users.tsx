import React, { useEffect, useState } from "react"
import { UsersList } from "../../components/shared/UsersList/UsersList"
import { Breadcrumbs } from "../../components/ui/Breadcrumbs"
import { IUser } from "../../types/user.type"
import { useDebounce } from "../../hooks/useDebounse"
import { UserService } from "../../service/UserService"
import { Loading } from "../../components/ui/Loading"

export const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const debouncedValue = useDebounce("", 500)

  useEffect(() => {
    setLoading(true)
    UserService.getAllUsers()
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [debouncedValue])

  if (loading) return <Loading />

  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs />
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <UsersList users={users} />
    </div>
  )
}
