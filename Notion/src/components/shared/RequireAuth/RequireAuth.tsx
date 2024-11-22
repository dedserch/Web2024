import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { IUserContext, UserContext } from "../../../Context/UserContextProvider"

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user, loading } = useContext(UserContext) as IUserContext

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user?.id) {
    return <Navigate to="/auth" replace />
  }

  return children
}