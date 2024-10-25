import React from "react";
import { IProduct } from "../../../types/product.type";

interface ProductProps {
    product: IProduct;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                className="w-full h-48 object-cover"
                src={product.imageUrl}
                alt={product.name}
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <p className="text-sm text-gray-600">category: {product.category}</p>
                <p className="text-md font-bold text-gray-800 mt-2">price: ${product.price}</p>
                <div className="flex items-center mt-2">
                    <span className="text-yellow-500 text-sm">rating:</span>
                    <span className="ml-1 text-gray-600 text-sm">★{product.rating}</span>
                </div>
            </div>
        </div>
    );
};
