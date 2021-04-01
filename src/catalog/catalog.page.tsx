import { useEffect, useState } from 'react'
import { Page } from 'lib/components/layout'
import { Modal, ModalTitle, ModalActions, ModalContent } from 'lib/components/modal'
import { FormInput, Checkbox } from 'lib/components/inputs'
import { Template } from 'lib/components'
import { usePagination, useProducts } from './lib/hooks'
import { ProductList, Pagination, Filters, InsertModal } from './lib/components'
import { AddCircleOutline } from '@material-ui/icons'
import { TrailConfigs, Form } from 'core/types'
import style from './catalog.module.scss'

const axios = require('axios').default

type InsertForm = {
  code: string,
  name: string,
  auxcode: string,
  reference: string,
  isactive: boolean
}

const Catalog = () => {
  const [ trailConfigs, setTrailConfigs ] = useState<TrailConfigs>({ reset: true, reverse: false })
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const [ query, setQuery ] = useState({ query: null })
  const [ pagination, setPagination ] = useState({ page: 1, perPage: 10})

  const [ form, setForm ] = useState<Form<InsertForm>>({
    "code": { value: '', type: 'string', validator: [ (e: string) => e.length < 4 ] },
    "name": { value: '', type: 'string' },
    "auxcode": { value: '', type: 'string' },
    "reference": { value: '', type: 'string' },
    "isactive": { checked: false, type: 'bool' }
  })

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
  }

  const handleFormInput = (name: string, value: string | number | boolean) => {
    if (form[name].type == 'bool') {
      form[name].checked = value
    }
    else {
      form[name].value = value
    }

    setForm({ ...form })
  }

  const submitForm = () => {
    const payload = Object.keys(form).reduce((payload, key) => {
      let value: string | boolean;

      if (form[key].type == 'bool') {
        value = form[key].checked
      }
      else {
        value = form[key].value
      }

      return { ...payload, [key]: value }
    }, {})

    console.log(payload)
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
            <InsertModal>
              <Template slot='identity'>
                <FormInput
                  placeholder='Cód. Produto'
                  name='code'
                  value={ form.code.value }
                  handleInput={ handleFormInput }
                />
                <FormInput
                  placeholder='Cód. Auxiliar'
                  name='auxcode'
                  value={ form.auxcode.value }
                  handleInput={ handleFormInput }
                />
                <FormInput
                  placeholder='Ref'
                  name='reference'
                  value={ form.reference.value }
                  handleInput={ handleFormInput }
                />
                <FormInput
                  style={{ gridColumn: '1/4' }}
                  placeholder='Nome do Produto'
                  name='name'
                  value={ form.name.value }
                  handleInput={ handleFormInput }
                />
              </Template>
              <Template slot='visibility'>
                <Checkbox
                  name='isactive'
                  label='Ativo?'
                  value={ form.isactive.checked }
                  handleInput={ handleFormInput }
                />
              </Template>
            </InsertModal>
          </ModalContent>
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