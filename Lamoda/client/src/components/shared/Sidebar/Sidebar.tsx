import React, { useState, useEffect } from "react";
import { CheckBox } from "../../ui/CheckBox";
import { Input } from "../../ui/Input";
import { COLORS } from "../../../constants/colors.enum";
import { useDebounce } from "../../../hooks/useDebounse";


interface SidebarProps {
  onFilterChange: (filters: {
    colors: COLORS[];
    minPrice: number;
    maxPrice: number;
  }) => void;
  productCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  onFilterChange,
  productCount,
}) => {
  const [selectedColors, setSelectedColors] = useState<COLORS[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const debouncedSelectedColors = useDebounce(selectedColors, 500);
  const debouncedMinPrice = useDebounce(minPrice, 500);
  const debouncedMaxPrice = useDebounce(maxPrice, 500);

  const handleColorChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    color: COLORS
  ) => {
    if (e.target.checked) {
      setSelectedColors((prevColors) => [...prevColors, color]);
    } else {
      setSelectedColors((prevColors) => prevColors.filter((c) => c !== color));
    }
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  useEffect(() => {
    onFilterChange({
      colors: debouncedSelectedColors,
      minPrice: debouncedMinPrice || 0,
      maxPrice: debouncedMaxPrice || Number.MAX_VALUE,
    });
  }, [debouncedSelectedColors, debouncedMinPrice, debouncedMaxPrice]);

  return (
    <div className="w-64 bg-white p-4 border-r">
      <h3 className="text-lg font-semibold mb-2">По цвету</h3>
      <div className="mb-4">
        {Object.values(COLORS).map((color) => (
          <label key={color} className="flex items-center mb-1">
            <CheckBox onChange={(e) => handleColorChange(e, color)} />
            <span className="ml-2">{color}</span>
          </label>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-2">По цене</h3>
      <div className="flex items-center space-x-2">
        <Input
          value={minPrice?.toString() || ""}
          placeholder="от"
          onChange={handleMinPriceChange}
        />
        <span>-</span>
        <Input
          value={maxPrice?.toString() || ""}
          placeholder="до"
          onChange={handleMaxPriceChange}
        />
      </div>

      <div className="mt-4">
        <p className="text-gray-600">Всего продуктов: {productCount}</p>
      </div>
    </div>
  );
};
