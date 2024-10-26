import React, { useState } from "react"
import { SORTINGS } from "../../../constants/sortings.enum"
import { Button } from "../../ui/Button"

interface SortingsProps {
  onSortChange: (sorting: SORTINGS) => void
}

export const Sortings: React.FC<SortingsProps> = ({ onSortChange }) => {
  const [activeSorting, setActiveSorting] = useState<SORTINGS>(
    SORTINGS.FIRST_POPULAR
  )

  const handleSortChange = (sorting: SORTINGS) => {
    setActiveSorting(sorting)
    onSortChange(sorting)
  }

  return (
    <div className="flex mb-4">
      <Button
        name="Сначала популярные"
        onClick={() => handleSortChange(SORTINGS.FIRST_POPULAR)}
        className={`py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105 ${
          activeSorting === SORTINGS.FIRST_POPULAR
            ? "bg-blue-700 text-white"
            : "bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700"
        }`}
      />
      <Button
        name="Сначала дорогие"
        onClick={() => handleSortChange(SORTINGS.FIRST_EXPENSIVE)}
        className={`mx-4 py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105 ${
          activeSorting === SORTINGS.FIRST_EXPENSIVE
            ? "bg-green-700 text-white"
            : "bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700"
        }`}
      />
      <Button
        name="Сначала дешевые"
        onClick={() => handleSortChange(SORTINGS.FIRST_CHEAP)}
        className={`mx-4 py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105 ${
          activeSorting === SORTINGS.FIRST_CHEAP
            ? "bg-red-700 text-white"
            : "bg-gradient-to-r from-red-400 to-red-600 text-white hover:from-red-500 hover:to-red-700"
        }`}
      />
    </div>
  )
}
