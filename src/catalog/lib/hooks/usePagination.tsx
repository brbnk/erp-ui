import { useEffect, useState } from 'react'
import { Products } from 'core/models/products'

interface PàginationParams {
  page: number,
  perPage: number,
  products: Products[],
  change?: boolean
}

export interface SelectedPage {
  page: number,
  totalPages?: number
}

export function usePagination({ page, perPage, products, change }: PàginationParams) {
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
  }, [ page, perPage, products, change ])

  return { pages, paginatedProducts, totalProducts, selected }
}