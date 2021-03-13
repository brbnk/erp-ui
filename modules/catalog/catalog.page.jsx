import { getLayout as mainPageLayout } from 'components/layout/main/main.component'
import Page from 'components/layout/main/page/page.component'

import ProductList from 'modules/catalog/lib/components/products/list.component'
import Pagination from 'modules/catalog/lib/components/pagination/pagination.components'
import Filters from 'modules/catalog/lib/components/filters/filters.component'

import style from './catalog.module.scss'
import { page1, page2 } from './mock/products'
import { useState } from 'react'

const Catalog = () => {
  const [ page, setPage ] = useState(page1)

  const handleChangePage = (pageNumber) => {
    // Make Request to Server
    const page = pageNumber == 1 ? page1 : page2
    setPage(page)
  }

  return (
    <Page title='Catálogo' contentLayout={style.layout}>
      <Filters />
      <ProductList products={page}/>
      <Pagination change={handleChangePage}/>
    </Page>
  )
}

Catalog.getLayout = mainPageLayout

export default Catalog