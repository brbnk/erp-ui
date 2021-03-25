import { useEffect, useState, ChangeEvent } from 'react'
import { Page } from 'lib/components/layout'
import { usePagination, useProducts } from './lib/hooks'
import { ProductList, Pagination, Filters, InsertModal } from './lib/components'
import { AddCircleOutline } from '@material-ui/icons'
import { Modal, ModalTitle, ModalActions } from 'lib/components/modal'
import { TrailConfigs } from 'lib/components/trail/trail.component'
import style from './catalog.module.scss'

const Catalog = () => {
  const [ trailConfigs, setTrailConfigs ] = useState<TrailConfigs>({ reset: true, reverse: false })
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const [ query, setQuery ] = useState({ query: null })
  const [ pagination, setPagination ] = useState({ page: 1, perPage: 10})

  const [ form, setForm ] = useState({
    code: '',
    name: ''
  } as any)

  const { products, hasChange } = useProducts(query)
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
    if (!q || q.length > 3) {
      setQuery({ query: q })
      setPagination({ page: 1, perPage: 10 })
      setTrailConfigs({ reset: hasChange || !q, reverse: false })
    }
  }

  const handleModalState = (state: boolean) => {
    setModalIsOpen(state)
    setTrailConfigs({ reset: false, reverse: false })
  }

  const handleFormInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitForm = () => {
    console.log(form)
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
          <InsertModal
            handleFormInput={handleFormInput}
          />
          <ModalActions
            state={handleModalState}
            action={{ type: 'INSERT', event: submitForm }}
          />
        </Modal> : null
      }
    </Page>
  )
}

export default Catalog