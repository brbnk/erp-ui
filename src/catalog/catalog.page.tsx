import { useEffect, useState } from 'react'
import { Page } from 'common/components/layout'
import { Modal, ModalTitle, ModalActions, ModalContent } from 'common/components/modal'
import { FormInput, Checkbox } from 'common/components/inputs'
import { Template } from 'common/components'
import { useInsertForm, usePagination, useProducts } from './hooks'
import { ProductList, Pagination, Filters, InsertModal } from './components'
import { AddCircleOutline } from '@material-ui/icons'
import { TrailConfigs, Form } from 'core/types'
import { FormHelper } from 'core/utils/helpers'
import { ProductsFilters } from './hooks/useProducts'
import { Products } from 'core/models/products'

const axios = require('axios').default

import style from './catalog.module.scss'

const Catalog = () => {
  const [ trailConfigs, setTrailConfigs ] = useState<TrailConfigs>({ reset: true, reverse: false })
  const [ modalIsOpen, setModalIsOpen ] = useState(false)

  const [ filters, setFilters ] = useState<ProductsFilters>({ query: null, sortByName: null, sortByPrice: null })
  const [ pagination, setPagination ] = useState({ page: 1, perPage: 12 })
  const [ change, setChange ] = useState<boolean>(false)

  const { products, hasChange } = useProducts(filters)
  const { pages, paginatedProducts, totalProducts, selected } = usePagination({ ...pagination, products, change })
  const { form: f, submit, clear, set } = useInsertForm()

  useEffect(() => {
    setFilters({ query: '', sortByName: null, sortByPrice: null })
  }, [])

  useEffect(() => {
    setChange(!change)
  }, [ filters ])

  const handleChangePage = (num: number) => {
    let reverse = num < selected.page
    setPagination({ ...pagination, page: num })
    setTrailConfigs({ reset: true, reverse })
  }

  const handleQuickSearch = (q: string) => {
    if (!q || q.length > 3) {
      setFilters({ query: q })
      setPagination({ ...pagination, page: 1 })
      setTrailConfigs({ reset: hasChange || !q, reverse: false })
    }
  }

  const handleSortFilter = (field: string, value: boolean) => {
    switch(field) {
      case 'name': setFilters({ sortByName: value }); break
      case 'price': setFilters({ sortByPrice: value }); break
    }

    setPagination({ ...pagination, page: 1 })
    setTrailConfigs({ reset: true, reverse: false })
  }

  const handleModalState = (state: boolean) => {
    setModalIsOpen(state)
    setTrailConfigs({ reset: false, reverse: false })

    if (!state) clear()
  }

  const submitForm = () => {
    const payload = submit()
    console.log(payload)
  }

  return (
    <Page title='Catálogo' contentLayout={style.layout}>
      <Filters
        quickSearch={handleQuickSearch}
        modalState={handleModalState}
        sortFilter={handleSortFilter}
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
            <InsertModal>
              <Template slot='identity'>
                <FormInput
                  name='code'
                  label={f.code.label}
                  value={f.code.value}
                  error={f.code.error}
                  handleInput={set}
                />
                <FormInput
                  name='auxcode'
                  label={f.auxcode.label}
                  value={f.auxcode.value}
                  handleInput={set}
                />
                <FormInput
                  name='reference'
                  label={f.reference.label}
                  value={f.reference.value}
                  error={f.reference.error}
                  handleInput={set}
                />
                <FormInput
                  name='name'
                  label={f.name.label}
                  value={f.name.value}
                  error={f.name.error}
                  handleInput={set}
                  style={{ gridColumn: '1/4' }}
                />
              </Template>
              <Template slot='visibility'>
                <Checkbox
                  name='isactive'
                  label={f.isactive.label}
                  value={f.isactive.checked}
                  handleInput={set}
                />
              </Template>
              <Template slot='characteristics'>
                <FormInput
                  name='description'
                  label={f.description.label}
                  value={f.description.value}
                  handleInput={set}
                />
                <FormInput
                  name='brand'
                  label={f.brand.label}
                  value={f.brand.value}
                  handleInput={set}
                />
                <FormInput
                  name='categories'
                  label={f.categories.label}
                  value={f.categories.value}
                  handleInput={set}
                />
                <FormInput
                  name='supplier'
                  label={f.supplier.label}
                  value={f.supplier.value}
                  handleInput={set}
                />
                <FormInput
                  name='keywords'
                  label={f.keywords.label}
                  value={f.keywords.value}
                  handleInput={set}
                />
              </Template>
            </InsertModal>
          </ModalContent>
          <ModalActions state={handleModalState} action={{ type: 'INSERT', event: submitForm }}/>
        </Modal> : null
      }
    </Page>
  )
}

export default Catalog