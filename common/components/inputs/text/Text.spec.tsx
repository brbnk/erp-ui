import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Text from './Text'

const props = {
  placeholder: 'TestInputText',
  input: "",
  handleInput: jest.fn((input: string) => {})
}

function setup() {
  const { placeholder } = props
  const utils = render(<Text {...props}/>)

  return {
    ...utils,
    input: utils.queryByPlaceholderText(placeholder)
  }
}

describe('Text', () => {
  test('it should load and display an input of type "text"', () => {
    const { input } = setup()

    expect(input).toBeInTheDocument()
  })

  test('calls "handleInput" on change', () => {
    const { input } = setup()

    fireEvent.change(input, { target: { value: 'textString' }})

    expect(props.handleInput).toHaveBeenCalled()
  })
})