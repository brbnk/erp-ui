import { useForm } from 'common/hooks/useForm'
import { Products } from 'core/models/products'

export const useInsertForm = () => {
  const { form, submit, clear, set } = useForm<Products>({
    code: {
      label: 'Código Produto',
      value: '',
      type: 'string',
      validator: [
        { rule: (e: string) => e.length < 4, message: 'O campo "Cód. Produto" deve ter 3 caracteres no máximo.' },
        { rule: (e: string) => !e.includes('word'), message: 'Não pode conter a palavra word' }
      ],
      error: { state: false, messages: [] }
    },
    name: {
      group: 'identity',
      label: 'Nome do Produto',
      value: '',
      type: 'string',
      validator: [
        { rule: (e: string) => e.length < 20, message: 'O campo "Nome do Produto" deve ter 20 caracteres no máximo.' }
      ],
      error: { state: false, messages: [] },
      style: { gridColumn: '1/4' }
    },
    auxcode: {
      group: 'identity',
      label: 'Cód. Auxiliar',
      value: '',
      type: 'string'
    },
    reference: {
      group: 'identity',
      label: 'Ref',
      value: '',
      type: 'string',
      validator: [
        { rule: (e: string) => e.length < 4, message: 'O campo "Ref" deve ter 4 caracteres no máximo.' }
      ],
      error: { state: false, messages: [] }
    },
    isactive: {
      group: 'visibility',
      label: 'Ativo?',
      checked: false,
      type: 'bool'
    },
    description: {
      group: 'characteristics',
      type: 'string',
      label: 'Descrição do Produto',
      value: ''
    },
    brand: {
      group: 'characteristics',
      type: 'string',
      label: 'Marca',
      value: ''
    },
    categories: {
      group: 'characteristics',
      type: 'string',
      label: 'Categorias',
      value: ''
    },
    supplier: {
      group: 'characteristics',
      type: 'string',
      label: 'Fornecedor',
      value: ''
    },
    keywords: {
      group: 'characteristics',
      type: 'string',
      label: 'Palavras-chave',
      value: ''
    },
  })

  return { form, submit, clear, set }
}