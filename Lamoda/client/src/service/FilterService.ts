import { IProduct } from "../types/product.type"
import { IProductFilters } from "../types/productFilters.type"
import { Sortings } from "../constants/sortings.enum"

type FilterFunction = (product: IProduct) => boolean

export class FilterService {
  private filters: FilterFunction[] = []

  constructor(filtersConfig: IProductFilters) {
    this.updateFilters(filtersConfig)
  }

  updateFilters(filtersConfig: IProductFilters) {
    this.filters = []

    if (filtersConfig.searchValue) {
      this.filters.push(
        (product) =>
          product.name
            .toLowerCase()
            .includes(filtersConfig.searchValue.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(filtersConfig.searchValue.toLowerCase())
      )
    }

    if (filtersConfig.colors.length) {
      this.filters.push((product) =>
        filtersConfig.colors.includes(product.color)
      )
    }

    if (
      filtersConfig.minPrice !== 0 ||
      filtersConfig.maxPrice !== Number.MAX_VALUE
    ) {
      this.filters.push(
        (product) =>
          product.price >= filtersConfig.minPrice &&
          product.price <= filtersConfig.maxPrice
      )
    }
  }

  filterProducts(products: IProduct[], sorting: Sortings): IProduct[] {
    const filteredProducts = products.filter((product) =>
      this.filters.every((filterFunc) => filterFunc(product))
    )

    return this.applySorting(filteredProducts, sorting)
  }

  applySorting(products: IProduct[], sorting: Sortings): IProduct[] {
    return products.slice().sort((a, b) => {
      switch (sorting) {
        case Sortings.FIRST_CHEAP:
          return a.price - b.price
        case Sortings.FIRST_EXPENSIVE:
          return b.price - a.price
        case Sortings.FIRST_POPULAR:
          return b.rating - a.rating
        default:
          return 0
      }
    })
  }
}