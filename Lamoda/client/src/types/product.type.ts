import { CATEGORIES } from "../constants/categories.enum"
import { COLORS } from "../constants/colors.enum"

export interface IProduct {
    id: string
    name: string
    color: COLORS
    category: CATEGORIES
    price: number
    rating: number
    imageUrl: string
}