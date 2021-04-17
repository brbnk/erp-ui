import { useEffect, useState } from 'react'
import { Page } from 'common/components/layout'
import { Modal, ModalTitle, ModalActions, ModalContent } from 'common/components/modal'
import { FormInput, Checkbox } from 'common/components/inputs'
import { Template } from 'common/components'
import { usePagination, useProducts } from './hooks'
import { ProductList, Pagination, Filters, InsertModal } from './components'
import { AddCircleOutline } from '@material-ui/icons'
import { TrailConfigs, Form } from 'core/types'
import { FormHelper } from 'core/utils/helpers'
import { ProductsFilters } from './hooks/useProducts'
import { DragAndDrop } from 'common/components/inputs'

const axios = require('axios').default

import style from './catalog.module.scss'
import modalStyle from './components/insertModal/InsertModal.module.scss'

interface InsertForm {
  code: string,
  name: string,
  auxcode: string,
  reference: string,
  isactive: boolean,
  images: File[],
}

const Catalog = () => {
  const [ trailConfigs, setTrailConfigs ] = useState<TrailConfigs>({ reset: true, reverse: false })
  const [ modalIsOpen, setModalIsOpen ] = useState(false)

  const [ filters, setFilters ] = useState<ProductsFilters>({ query: null, sortByName: null, sortByPrice: null })
  const [ pagination, setPagination ] = useState({ page: 1, perPage: 12 })
  const [ change, setChange ] = useState<boolean>(false)

  const { products, hasChange } = useProducts(filters)
  const { pages, paginatedProducts, totalProducts, selected } = usePagination({ ...pagination, products, change })

  useEffect(() => {
    setFilters({ query: '', sortByName: null, sortByPrice: null })
  }, [])

  useEffect(() => {
    setChange(!change)
  }, [ filters ])

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
    },
    images: {
      files: [],
      type: 'images'
    }
  })

  const handleFileDrop = (files: File[]) => {
    const newForm = { ...form }
    form.images.files = files
    setForm(newForm)
  }

  const handleChangePage = (num: number) => {
    setPagination({ ...pagination, page: num })

    let reverse = num < selected.page
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
              <Template slot='images' className={modalStyle.img_container}>
                <div className={modalStyle.viewer}>
                  {
                    form.images.files.length > 0 ?
                      form.images.files.map((image, idx) => <img src={URL.createObjectURL(image)} key={idx}/>) :
                      null
                  }
                </div>
                <DragAndDrop
                  isMultiple={true}
                  handleFileDrop={handleFileDrop}
                />
              </Template>
              <Template slot='identity'>
                <FormInput label='Cód. Produto' name='code' value={form.code.value} handleInput={handleFormInput} error={form.code.error}/>
                <FormInput label='Cód. Auxiliar' name='auxcode' value={form.auxcode.value} handleInput={handleFormInput}/>
                <FormInput label='Ref' name='reference' value={form.reference.value} handleInput={handleFormInput} error={form.reference.error}/>
                <FormInput label='Nome do Produto' name='name' value={form.name.value} handleInput={handleFormInput} error={form.name.error} style={{ gridColumn: '1/4' }} />
              </Template>
              <Template slot='visibility'>
                <Checkbox name='isactive' label='Ativo?' value={form.isactive.checked} handleInput={handleFormInput}/>
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