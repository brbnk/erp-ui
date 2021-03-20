import { useEffect, useState } from 'react'
import { Products } from 'core/models/products'

import mockProducts from '../../mock/products'

type ProductsParams = {
  query?: string
}

export function useProducts({ query }: ProductsParams) {
  const [ products, setProducts ] = useState<Products[]>([])

  const filterName = (query: string) => {
    return mockProducts.filter(el => el.name.includes(query))
  }

  useEffect(() => {
    if (!query) {
      setProducts(mockProducts)
      return
    }

    if (query.length <= 3) return

    const filteredByName = filterName(query)

    setProducts(filteredByName)
  }, [ query ])

  return { products }
}