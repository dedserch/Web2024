import React from "react"
import { useNavigate } from "react-router-dom"

export const BackButton: React.FC = () => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="px-4 py-2 mb-4 text-sm font-medium text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors"
    >
      ← Go Back
    </button>
  )
}
