import { useEffect, useState } from 'react'

import { Page } from 'components/layout'
import { Modal } from 'components'
import { Products } from 'core/models/products'
import { ProductList, Pagination, Filters } from './lib/components/index'
import { products } from './mock/products'

import style from './catalog.module.scss'

const Catalog = () => {
  const [ page, setPage ] = useState<Products[]>([])
  const [ filtered, setFiltered ] = useState<Products[]>([])
  const [ pageNumber, setPageNumber ] = useState<number>(1)
  const [ range, setRange ] = useState<number[]>([])
  const [ maxProductsPerPage, setMaxProductsPerPage ] = useState<number>(10)

  useEffect(() => {
    const numberOfPages = Math.ceil(products.length / maxProductsPerPage)

    setPage(products.slice(0, maxProductsPerPage))
    setRange([...Array(numberOfPages).keys()])
  }, [])

  const handleChangePage = (num: number) => {
    // Make Request to Server
    const obj = filtered.length > 0 ? filtered : products
    const page = obj.slice((num-1)*maxProductsPerPage, num*maxProductsPerPage)
    setPage(page)
    setPageNumber(num)
  }

  const filterName = (query: string) => {
      return products.filter(el => el.name.includes(query))
  }

  const handleFilterProducts = (query: string) => {
    if (!query) {
      const numberOfPages = Math.ceil(products.length / maxProductsPerPage)
      setFiltered([])
      setPage(products.slice(0, maxProductsPerPage))
      setRange([...Array(numberOfPages).keys()])
      setPageNumber(1)
      return
    }

    if (query.length <= 3) return

    const filteredByName = filterName(query)
    const numberOfPages = Math.ceil(filteredByName.length / maxProductsPerPage)

    setFiltered(filteredByName.slice((pageNumber-1)*maxProductsPerPage, pageNumber*maxProductsPerPage))
    setRange([...Array(numberOfPages).keys()])
    setPageNumber(1)
  }

  return (
    <Page title='Catálogo' contentLayout={style.layout}>
      <Filters filterProducts={handleFilterProducts}/>
      <ProductList products={filtered.length > 0 ? filtered : page}/>
      <Pagination pageRange={range} emitChange={handleChangePage}/>
      {/* <Modal /> */}
    </Page>
  )
}

export default Catalog