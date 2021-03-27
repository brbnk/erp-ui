import { useEffect, useState } from 'react'
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
    setPagination({ ...pagination, page: num })

    let reverse = num < selected.page
    setTrailConfigs({ reset: true, reverse })
  }

  const handleQuickSearch = (q: string) => {
    if (!q || q.length > 3) {
      setQuery({ query: q })
      setPagination({ ...pagination, page: 1 })
      setTrailConfigs({ reset: hasChange || !q, reverse: false })
    }
  }

  const handleModalState = (state: boolean) => {
    setModalIsOpen(state)
    setTrailConfigs({ reset: false, reverse: false })

    if (!state) {
      setForm({})
    }
  }

  const handleFormInput = (name: string, value: string | number | boolean) => {
    setForm({ ...form, [name]: value })
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