import { useEffect, useMemo, useState } from 'react'
import { Products } from 'core/models/products'

import mockProducts from '../../mock/products'

type ProductsParams = {
  query?: string
}

export function useProducts({ query }: ProductsParams) {
  const [ products, setProducts ] = useState<Products[]>([])
  const [ length, setLength ] = useState<number>(-1)

  const filterName = (query: string) => {
    return mockProducts.filter(el => el.name.includes(query))
  }

  const hasChange = useMemo(() => {
    return length != products.length
  }, [ length ])

  useEffect(() => {
    if (!query) {
      setProducts(mockProducts)
      setLength(-1)
      return
    }

    const filteredByName = filterName(query)

    setProducts(filteredByName)
    setLength(filteredByName.length)
  }, [ query ])

  return { products, hasChange }
}