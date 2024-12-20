import React, { useContext } from "react"
import { Button } from "../../components/ui/Button"
import { IUserContext, UserContext } from "../../Context/UserContextProvider"
import { useNavigate } from "react-router-dom"

export const Home: React.FC = () => {
  const { user } = useContext(UserContext) as IUserContext
  const navigate = useNavigate()

  const handleNavigate = () => navigate("/notes")

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="bg-white text-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome, {user?.email}!
        </h1>
        <p className="text-lg text-center">
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
        <p className="text-lg text-center mb-6">
          <span className="font-semibold">Account Created:</span>
          {user?.createdAt ? new Date(user.createdAt).toLocaleString() : "N/A"}
        </p>
        <div className="flex justify-center">
          <Button name="Go to Notes" onClick={handleNavigate} />
        </div>
      </div>
    </div>
  )
}
