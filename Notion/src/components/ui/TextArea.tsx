import React from "react"

interface TextAreaProps {
  name: string
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md"
    />
  )
}
