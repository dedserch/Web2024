import React, { useState, useMemo, useCallback } from "react"
import { ProductList } from "./components/shared/ProductList/ProductList"
import { SortingsButton } from "./components/shared/Sortings/SortingsButton"
import { Sidebar } from "./components/shared/Sidebar/Sidebar"
import { Sortings } from "./constants/sortings.enum"
import { IProductFilters } from "./types/productFilters.type"
import { Colors } from "./constants/colors.enum"
import { SearchInput } from "./components/shared/SearchInput/SearchInput"
import { FilterService } from "./service/FilterService"
import { mockProducts } from "./constants/product.data"
import { useDebounce } from "./hooks/useDebounse"

function App() {
  const [filters, setFilters] = useState<IProductFilters>({
    searchValue: "",
    colors: [],
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
    sorting: Sortings.FIRST_POPULAR,
  })

  const debouncedSearchValue = useDebounce(filters.searchValue, 500)

  const filterService = useMemo(
    () => new FilterService({ ...filters, searchValue: debouncedSearchValue }),
    [filters, debouncedSearchValue]
  )

  const handleSortChange = useCallback((sorting: Sortings) => {
    setFilters((prev) => ({
      ...prev,
      sorting,
    }))
  }, [])

  const handleFilterChange = useCallback(
    (filterData: { colors: Colors[]; minPrice: number; maxPrice: number }) => {
      setFilters((prev) => ({
        ...prev,
        colors: filterData.colors,
        minPrice: filterData.minPrice,
        maxPrice: filterData.maxPrice,
      }))
    },
    []
  )

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilters((prev) => ({
        ...prev,
        searchValue: event.target.value,
      }))
    },
    []
  )

  const filteredProducts = useMemo(() => {
    return filterService.filterProducts(mockProducts, filters.sorting)
  }, [filterService, filters.sorting, mockProducts])

  return (
    <div className="flex">
      <Sidebar
        onFilterChange={handleFilterChange}
        productCount={filteredProducts.length}
      />

      <div className="flex-1 p-4">
        <SearchInput onSearchChange={handleSearchChange} />
        <SortingsButton onSortChange={handleSortChange} />

        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <div>По вашему запросу ничего не найдено.</div>
        )}
      </div>
    </div>
  )
}

export default App
