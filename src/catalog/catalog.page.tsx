import { useEffect, useState } from 'react'
import { Page } from 'components/layout'
import { usePagination, useProducts } from './lib/hooks/index'
import { ProductList, Pagination, Filters } from './lib/components/index'
import { AddCircleOutline } from '@material-ui/icons'
import Modal from 'components/modal/modal.component'

import style from './catalog.module.scss'

const Catalog = () => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const [ query, setQuery ] = useState({ query: null })
  const [ pagination, setPagination ] = useState({ page: 1, perPage: 10})

  const { products } = useProducts(query)
  const { pages, paginatedProducts, totalProducts, selected } = usePagination({ ...pagination, products })

  useEffect(() => {
    setQuery({ query: '' })
  }, [])

  const handleChangePage = (num: number) => {
    // Make Request to Server
    setPagination({ page: num, perPage: 10})
  }

  const handleQuickSearch = (q: string) => {
    setQuery({ query: q })

    if (!q || q.length > 3)
      setPagination({ page: 1, perPage: 10 })
  }

  const handleModalState = (state: boolean) => setModalIsOpen(state)

  return (
    <Page title='Catálogo' contentLayout={style.layout}>
      <Filters
        quickSearch={handleQuickSearch}
        modalState={handleModalState}
      />
      <ProductList
        products={paginatedProducts}
      />
      <Pagination
        pageRange={pages}
        emitChange={handleChangePage}
        total={totalProducts}
        selected={selected}
      />
      { modalIsOpen ?
        <Modal modalState={handleModalState}>
          <div>
            <AddCircleOutline />
            <h2> Inserir Produto  </h2>
          </div>
          <div>

          </div>
        </Modal> : null
      }
    </Page>
  )
}

export default Catalog