import { useEffect, useState } from 'react'
import { Page } from 'components/layout'
import { usePagination, useProducts } from './lib/hooks/index'
import { ProductList, Pagination, Filters } from './lib/components/index'

import style from './catalog.module.scss'

const Catalog = () => {
  const [ query, setQuery ] = useState({ query: null })
  const [ pagination, setPagination ] = useState({ page: 1, perPage: 10})

  const { products } = useProducts(query)
  const { pages, paginatedProducts } = usePagination({ ...pagination, products })

  useEffect(() => {
    setQuery({ query: '' })
  }, [])

  const handleChangePage = (num: number) => {
    // Make Request to Server
    setPagination({ page: num, perPage: 10})
  }

  const handleFilterProducts = (q: string) => {
    setQuery({ query: q })
  }

  return (
    <Page title='Catálogo' contentLayout={style.layout}>
      <Filters filterProducts={handleFilterProducts}/>
      <ProductList products={paginatedProducts}/>
      <Pagination pageRange={pages} emitChange={handleChangePage}/>
    </Page>
  )
}

export default Catalog