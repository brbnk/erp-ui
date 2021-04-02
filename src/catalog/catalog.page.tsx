import { useEffect, useState } from 'react'
import { Page } from 'lib/components/layout'
import { Modal, ModalTitle, ModalActions, ModalContent } from 'lib/components/modal'
import { FormInput, Checkbox } from 'lib/components/inputs'
import { Template } from 'lib/components'
import { usePagination, useProducts } from './lib/hooks'
import { ProductList, Pagination, Filters, InsertModal } from './lib/components'
import { AddCircleOutline } from '@material-ui/icons'
import { TrailConfigs, Form } from 'core/types'
import { FormHelper } from 'core/utils/helpers'
const axios = require('axios').default

import style from './catalog.module.scss'

interface InsertForm {
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
    code: {
      value: '',
      type: 'string',
      validator: [
        { rule: (e: string) => e.length < 4, message: 'O campo "Cód. Produto" deve ter 3 caracteres no máximo.' },
        { rule: (e: string) => !e.includes('word'), message: 'Não pode conter a palavra word' }
      ],
      error: { state: false, messages: [] }
    },
    name: {
      value: '',
      type: 'string',
      validator: [
        { rule: (e: string) => e.length < 20, message: 'O campo "Nome do Produto" deve ter 20 caracteres no máximo.' }
      ],
      error: { state: false, messages: [] }
    },
    auxcode: {
      value: '',
      type: 'string'
    },
    reference: {
      value: '',
      type: 'string',
      validator: [
        { rule: (e: string) => e.length < 4, message: 'O campo "Ref" deve ter 4 caracteres no máximo.' }
      ],
      error: { state: false, messages: [] }
    },
    isactive: {
      checked: false,
      type: 'bool'
    }
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

    if (!state) {
      const clearedForm = FormHelper.Clear({ ...form })
      setForm({ ...clearedForm })
    }
  }

  const handleFormInput = (name: string, value: string | number | boolean) => {
    const newForm = { ...form }

    FormHelper.Validator(newForm, name, value)

    const dirtyForm = FormHelper.SetValue(newForm, name, value)

    setForm({ ...dirtyForm })
  }

  const submitForm = () => {
    const hasErrors = FormHelper.HasErrors(form)

    if (hasErrors) {
      alert()
      return
    }

    const payload = FormHelper.ToJson(form)
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
                  error={ form.code.error }
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
                  error={ form.reference.error }
                />
                <FormInput
                  style={{ gridColumn: '1/4' }}
                  placeholder='Nome do Produto'
                  name='name'
                  value={ form.name.value }
                  handleInput={ handleFormInput }
                  error={ form.name.error }
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