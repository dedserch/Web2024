import React from "react";
import { SORTINGS } from "../../../constants/sortings.enum";
import { Button } from "../../ui/Button";

interface SortingsProps {
  onSortChange: (sorting: SORTINGS) => void;
}

export const Sortings: React.FC<SortingsProps> = ({ onSortChange }) => {
  return (
    <div className="flex justify-between mb-4">
      <Button
        name="Сначала популярные"
        onClick={() => onSortChange(SORTINGS.FIRST_POPULAR)}
        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-2 px-4 rounded shadow-lg hover:from-blue-500 hover:to-blue-700 transition-transform transform hover:scale-105"
      />
      <Button
        name="Сначала дорогие"
        onClick={() => onSortChange(SORTINGS.FIRST_EXPENSIVE)}
        className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-2 px-4 rounded shadow-lg hover:from-green-500 hover:to-green-700 transition-transform transform hover:scale-105"
      />
      <Button
        name="Сначала дешевые"
        onClick={() => onSortChange(SORTINGS.FIRST_CHEAP)}
        className="bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold py-2 px-4 rounded shadow-lg hover:from-red-500 hover:to-red-700 transition-transform transform hover:scale-105"
      />
    </div>
  );
};
