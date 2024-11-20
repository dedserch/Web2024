import React from "react"

interface CheckBoxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckBox: React.FC<CheckBoxProps> = ({ onChange }) => {
  return (
    <input
      type="checkbox"
      className="mr-2 cursor-pointer"
      onChange={onChange}
    />
  )
}
