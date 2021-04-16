import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Checkbox from './Checkbox'

const props = {
  name: 'IsActive',
  label: 'Ativo?',
  value: false,
  handleInput: jest.fn((name: string, value: boolean) => {})
}

function setup() {
  const utils = render(<Checkbox {...props}/>)

  const checkbox = utils.container.querySelector('input[type=checkbox]')

  return {
    ...utils,
    checkbox
  }
}

describe('Checkbox', () => {
  test('it should load and display an input of type "checkbox"', () => {
    const { checkbox } = setup()

    expect(checkbox).toBeInTheDocument();
  })

  test('it should display a label', () => {
    const { queryByText } = setup()

    expect(queryByText(props.label)).toBeInTheDocument()
  })

  test('calls "handleInput" when clicked', () => {
    const { checkbox } = setup()

    fireEvent.click(checkbox)

    expect(props.handleInput).toHaveBeenCalledTimes(1)
  })
})