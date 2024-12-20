import React from "react"
import { IUser } from "../../../types/user.type"
import { useNavigate } from "react-router-dom"

interface UserCardProps {
  user: IUser
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/users/${user.id}/albums`)
  }

  return (
    <div
      onClick={handleCardClick}
      className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-100 transition cursor-pointer"
    >
      <h2 className="text-lg font-semibold">{user.username}</h2>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Phone: {user.phone}</p>
      <p className="text-gray-600">Website: {user.website}</p>
    </div>
  )
}
