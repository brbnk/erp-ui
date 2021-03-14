import Page from 'components/layout/main/page/page.component'

import ProductList from 'src/catalog/lib/components/products/list.component'
import Pagination from 'src/catalog/lib/components/pagination/pagination.components'
import Filters from 'src/catalog/lib/components/filters/filters.component'
import Modal from 'components/modal/modal.component'

import style from './catalog.module.scss'
import { products } from './mock/products'
import { useEffect, useState } from 'react'

const Catalog = () => {
  const [ page, setPage ] = useState([])
  const [ filtered, setFiltered ] = useState([])
  const [ pageNumber, setPageNumber ] = useState(1)
  const [ range, setRange ] = useState([])
  const [ maxProductsPerPage, setMaxProductsPerPage ] = useState(12)

  useEffect(() => {
    const numberOfPages = Math.ceil(products.length / maxProductsPerPage)

    setPage(products.slice(0, maxProductsPerPage))
    setRange([...Array(numberOfPages).keys()])
  }, [])

  const handleChangePage = (num) => {
    // Make Request to Server
    const obj = filtered.length > 0 ? filtered : products
    const page = obj.slice((num-1)*maxProductsPerPage, num*maxProductsPerPage)
    setPage(page)
    setPageNumber(num)
  }

  const filterName = query => {
      return products.filter(el => el.name.includes(query))
  }

  const handleFilterProducts = (query) => {
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
      <Pagination pageRange={range} change={handleChangePage}/>
      {/* <Modal /> */}
    </Page>
  )
}

export default Catalog