import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import FormInput from './FormInput'

const props = {
  label: "TestFormInput",
  name: "test",
  value: "",
  handleInput: jest.fn((name: string, value: string) => {})
}

function setup(optionalProps: object) {
  const { label } = props

  const utils = render(<FormInput {...props } { ...optionalProps }/>)

  return {
    ...utils,
    input: utils.queryByLabelText(label)
  }
}

describe('FormInput', () =>{
  test('it should load and display an input of type "text"', () => {
    const { input } = setup({ type: 'text'})
    expect(input).toBeInTheDocument()
  })

  test('it should load and display an input of type "number', () => {
    const { input } = setup({ type: 'number'})
    expect(input).toBeInTheDocument()
  })

  test('calls "handleInput" when input changes', () => {
    const { input } = setup({})

    fireEvent.change(input, { target: { value: "test" }})

    expect(props.handleInput).toBeCalledTimes(1)
  })

  test('if input contains errors, border style should be "2px solid red"', () => {
    const { input } = setup({error: { state: true, messages: ["Error 1", "Error 2"] } })

    expect(input).toHaveStyle('border: 2px solid red')
  })

  test('erros messages should be displayed on MouseOver and hidden on MouseOut', () => {
    const { input } = setup({error: { state: true, messages: ["Error 1", "Error 2"] } })

    fireEvent.mouseOver(input)
    expect(screen.queryByText("Error 1")).toBeInTheDocument()
    expect(screen.queryByText("Error 2")).toBeInTheDocument()

    fireEvent.mouseOut(input)
    expect(screen.queryByText("Error 1")).toBeNull()
    expect(screen.queryByText("Error 2")).toBeNull()
  })
})