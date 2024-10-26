import React from "react";

interface SearchInputProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={onSearchChange}
      className="w-full px-4 py-2 mr-2 border-gray-300 border mb-2"
    />
  );
};
