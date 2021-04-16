import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import ModalActions from './ModalActions'
import { ModalActionsProps } from './ModalActions'

const props: ModalActionsProps = {
  action: { type: 'INSERT', event: jest.fn(() => {}) },
  state: jest.fn(() => {})
}

function setup() {
  const utils = render(<ModalActions {...props} />)
  return {
    ...utils
  }
}

describe("ModalActions", () => {
  test("it should render an action button with text 'INSERIR'", () => {
    const { queryByText } = setup()
    expect(queryByText('INSERIR')).toBeInTheDocument()
  })

  test("it should render an action button of type 'EDITAR'", () => {
    const { container } = setup()
    const btn = render(
      <ModalActions {...props} action={{ type: 'UPDATE', event: jest.fn(() => {} )}}/>, { container })

    expect(btn.queryByText('INSERIR')).toBeInTheDocument()
  })

  test("it should render an action button of type 'DELETAR'", () => {
    const { container } = setup()
    const btn = render(
      <ModalActions {...props} action={{ type: 'DELETE', event: jest.fn(() => {} )}}/>, { container })

    expect(btn.queryByText('DELETAR')).toBeInTheDocument()
  })

  test("calls 'event' when INSERT, UPDATE or DELETE button is clicked", () => {
    const { queryByText } = setup()

    fireEvent.click(queryByText('INSERIR'))

    expect(props.action.event).toBeCalledTimes(1)
  })

  test("it should render a CANCEL button", () => {
    const { queryByText } = setup()
    expect(queryByText('CANCELAR')).toBeInTheDocument()
  })

  test("calls a function to close modal when CANCEL button is clicked", () => {
    const { queryByText } = setup()

    fireEvent.click(queryByText('CANCELAR'))

    expect(props.state).toBeCalledTimes(1)
  })
})