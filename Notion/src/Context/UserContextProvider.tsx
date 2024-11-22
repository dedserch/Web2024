import { createContext, useEffect, useState, PropsWithChildren } from "react"
import { IUser } from "../types/user.types"

export interface IUserContext {
    user: IUser | null
    onChange: (user: IUser | null) => void
    loading: boolean
}

export const UserContext = createContext<IUserContext | null>(null)

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const id = localStorage.getItem("userId")
    if (id) {
      fetch(`http://localhost:5001/users?id=${id}`)
        .then((r) => r.json())
        .then((users) => users[0])
        .then((user) => {
          setUser(user)
          setLoading(false)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [])

  useEffect(()=>{
    if(user?.id){
        localStorage.setItem('userId', user.id)
    }
  },[user?.id])

  return (
    <UserContext.Provider value={{ user, onChange: setUser, loading }}>
      {children}
    </UserContext.Provider>
  )
}