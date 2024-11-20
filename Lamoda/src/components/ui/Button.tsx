import React from "react"

interface ButtonProps {
  name: string
  className: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({ name, className, onClick }) => {
  return (
    <button
      className={
        className
          ? className
          : `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`
      }
      onClick={onClick}
    >
      {name}
    </button>
  )
}
