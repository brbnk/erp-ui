import React from 'react'
import { render } from '@testing-library/react'
import Checkbox from './Checkbox'

const props = {
  name: 'IsActive',
  label: 'Ativo?',
  value: false,
  handleInput: (name: string, value: boolean) => {}
}

test('loads and display an input of type "checkbox"', () => {
  const { container } = render(<Checkbox { ...props } />)

  expect(container.querySelector('input[type=checkbox]'))
    .toBeInTheDocument()
})

test('checkbox')