import { Categories } from "../constants/categories.enum"
import { Colors } from "../constants/colors.enum"

export interface IProduct {
    id: string
    name: string
    description: string
    color: Colors
    category: Categories
    price: number
    rating: number
    imageUrl: string
}