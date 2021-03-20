import { useEffect, useState } from 'react'
import { Products } from 'core/models/products'

type PàginationParams = {
  page: number,
  perPage: number,
  products: Products[]
}

export function usePagination({ page, perPage, products }: PàginationParams) {
  const [ pages, setPages ] = useState<number[]>([])
  const [ paginatedProducts, setPaginatedProducts ] = useState<Products[]>([])

  useEffect(() => {
    const maxPage = Math.ceil(products.length / perPage)
    const start = (page - 1) * perPage
    const end = page * perPage

    setPages([...Array(maxPage).keys()])
    setPaginatedProducts(products.slice(start, end))
  }, [ page, perPage, products ])

  return { pages, paginatedProducts }
}