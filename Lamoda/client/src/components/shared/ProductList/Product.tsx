import React from "react"
import { IProduct } from "../../../types/product.type"

interface ProductProps {
  product: IProduct
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="max-w-xs bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="relative w-full h-48">
        <img
          className="w-full h-full object-cover object-center rounded-t-lg"
          src={product.imageUrl}
          alt={product.name}
        />
        <div className="absolute top-2 left-2 px-2 py-1 bg-gray-800 text-white text-xs rounded">
          {product.category}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {product.name}
        </h2>
        <p className="text-sm text-gray-600 mt-1 truncate">
          {product.description}
        </p>
        <div className="flex items-center mt-2 space-x-2">
          <span
            className={`w-3 h-3 rounded-full`}
            style={{ backgroundColor: product.color }}
          ></span>
          <span className="text-sm text-gray-500">Цвет: {product.color}</span>
        </div>
        <p className="text-md font-bold text-gray-800 mt-2">
          Цена: ${product.price}
        </p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-sm">Рейтинг:</span>
          <span className="ml-1 text-gray-600 text-sm">★{product.rating}</span>
        </div>
      </div>
    </div>
  )
}
