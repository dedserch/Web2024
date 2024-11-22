import React from "react"

interface InputProps {
  name: string
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
}

export const Input: React.FC<InputProps> = ({
  name,
  value,
  placeholder,
  onChange,
  type,
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-4 py-2 border-gray-300 border"
    />
  )
}
