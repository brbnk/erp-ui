import { useEffect, useState } from 'react'
import { Page } from 'components/layout'
import { usePagination, useProducts } from './lib/hooks/index'
import { ProductList, Pagination, Filters } from './lib/components/index'
import { AddCircleOutline } from '@material-ui/icons'
import { Modal, ModalTitle, ModalActions, ModalContent } from 'components/modal/index'
import { TrailConfigs } from 'components/trail/trail.component'

import style from './catalog.module.scss'

const Catalog = () => {
  const [ trailConfigs, setTrailConfigs ] = useState<TrailConfigs>({ reset: true, reverse: false })
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

    let reverse = num < selected.page
    setTrailConfigs({ reset: true, reverse })
  }

  const handleQuickSearch = (q: string) => {
    if (!q || q.length > 6) {
      setQuery({ query: q })
      setPagination({ page: 1, perPage: 10 })
      setTrailConfigs({ reset: true, reverse: false })
    }
  }

  const handleModalState = (state: boolean) => {
    setModalIsOpen(state)
    setTrailConfigs({ reset: false, reverse: false })
  }

  return (
    <Page title='Catálogo' contentLayout={style.layout}>
      <Filters
        quickSearch={handleQuickSearch}
        modalState={handleModalState}
      />
      <ProductList
        products={paginatedProducts}
        trailConfigs={trailConfigs}
      />
      <Pagination
        pageRange={pages}
        emitChange={handleChangePage}
        total={totalProducts}
        selected={selected}
      />
      { modalIsOpen ?
        <Modal>
          <ModalTitle title="Inserir Produto">
            <AddCircleOutline />
          </ModalTitle>
          <ModalContent>
            <span> Teste </span>
          </ModalContent>
          <ModalActions
            state={handleModalState}
            action={{ type: 'INSERT', event: () => ({}) }}
          />
        </Modal> : null
      }
    </Page>
  )
}

export default Catalog