import React from "react"
import { Product } from "./Product"
import { IProduct } from "../../../types/product.type"
import { COLORS } from "../../../constants/colors.enum"
import { CATEGORIES } from "../../../constants/categories.enum"

const exampleProduct: IProduct = {
    id: "1",
    name: "Idi naxui",
    description: "AAAA",
    color: COLORS.BLACK,
    category: CATEGORIES.DRESS,
    price: 100,
    rating: 3.5,
    imageUrl: "https://d1flfk77wl2xk4.cloudfront.net/Assets/92/549/XL_p0197954992.jpg"
}

export const ProductList: React.FC = () => {
  return (
    <div className="flex justify-center p-4">
      <Product product={exampleProduct} />
    </div>
  )
}
