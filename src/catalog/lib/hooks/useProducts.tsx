import { useEffect, useMemo, useState } from 'react'
import { Products } from 'core/models/products'

import mockProducts from '../../mock/products'

export interface ProductsFilters {
  query?: string,
  sortByName?: boolean
}

export function useProducts({ query, sortByName }: ProductsFilters) {
  const [ products, setProducts ] = useState<Products[]>([])
  const [ length, setLength ] = useState<number>(-1)

  const filterName = (query: string) => {
    return mockProducts.filter(el => el.name.includes(query))
  }

  const sortNameField = (a: Products, b: Products) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  }

  const hasChange = useMemo(() => {
    return length != products.length
  }, [ length ])

  useEffect(() => {
    if (!query && sortByName == null) {
      let p: any = mockProducts.sort(sortNameField)
      setProducts(p)
      setLength(-1)
      return
    }

    let filteredProducts: Array<any> = products;

    if (query) {
      filteredProducts = filterName(query)
    }

    if (sortByName !== null) {
      filteredProducts = sortByName ? filteredProducts.sort(sortNameField) :
        filteredProducts.sort(sortNameField).reverse()
    }

    setProducts(filteredProducts)
    setLength(filteredProducts.length)
  }, [ query, sortByName ])

  return { products, hasChange }
}