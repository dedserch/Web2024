import React from "react"

interface InputProps {
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-4 py-2 mr-2 border-gray-300 border mb-2"
    />
  )
}
