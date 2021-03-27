import { useEffect, useState } from 'react'
import { Products } from 'core/models/products'

type PàginationParams = {
  page: number,
  perPage: number,
  products: Products[]
}

export type SelectedPage = {
  page: number,
  totalPages?: number
}

export function usePagination({ page, perPage, products }: PàginationParams) {
  const [ pages, setPages ] = useState<number[]>([])
  const [ selected, setSelected ] = useState<SelectedPage>({ page: 1, totalPages: 1 })
  const [ paginatedProducts, setPaginatedProducts ] = useState<Products[]>([])
  const [ totalProducts, setTotalProducts ] = useState<number>(0)

  useEffect(() => {
    const totalPages = Math.ceil(products.length / perPage)
    const start = (page - 1) * perPage
    const end = page * perPage
    const currentPage = products.length > 0 ? page : 0;

    setPages([...Array(totalPages).keys()])
    setPaginatedProducts(products.slice(start, end))
    setTotalProducts(products.length)
    setSelected({ page: currentPage, totalPages })
  }, [ page, perPage, products ])

  return { pages, paginatedProducts, totalProducts, selected }
}