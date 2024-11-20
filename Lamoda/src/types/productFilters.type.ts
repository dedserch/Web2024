import { COLORS } from "../constants/colors.enum"
import { SORTINGS } from "../constants/sortings.enum"

export interface IProductFilters {
    searchValue: string
    colors: COLORS
    minPrice: number
    maxPrice: number
    sorting: SORTINGS
}