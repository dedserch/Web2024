import React from "react"

interface ButtonProps {
  name: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <button
      className={`inline-block px-8 py-3 text-indigo-700 bg-indigo-100 rounded-md shadow-md hover:bg-indigo-200 hover:text-indigo-900 transition-all duration-200`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}
