import React from "react"
import { Product } from "./Product"
import { IProduct } from "../../../types/product.type"

interface ProductListProps {
  products: IProduct[]
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
