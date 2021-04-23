import React from 'react'
import { fireEvent, queryByText, render } from '@testing-library/react'
import DragAndDrop from './DragAndDrop'

const onDrop = jest.fn(() => {})

function setup() {
  const utils = render(<DragAndDrop handleFileDrop={onDrop} isMultiple={true}/>)
  const input = utils.container.querySelector('input[type=file]')
  const dropzone = utils.getByTestId('dropzone')

  return {
    ...utils,
    input,
    dropzone
  }
}

describe('DragAndDrop', () => {
  test('it should render and display an input of type "file"', () => {
    const { input } = setup()
    expect(input).toBeInTheDocument()
  })

  test('input should be hidden from user', () => {
    const { input } = setup()
    expect(input).toHaveStyle('display: none')
  })

  test('it should render a dropzone area', () => {
    const { dropzone } = setup()
    expect(dropzone).not.toBeNull()
  })

  test('it should render a text, if dropzone is empty', () => {
    const { container } = setup()
    expect(container).toHaveTextContent(/drag and drop files here/i)
  })

  test('onDrag, style of dropzone should change', () => {
    const { dropzone } = setup()

    fireEvent.dragOver(dropzone)

    expect(dropzone).toHaveStyle('border: 2px solid black')
  })

  test('onDrop, an event should be called', () => {
    const { dropzone } = setup()

    fireEvent.drop(dropzone)

    expect(onDrop).toBeCalledTimes(1)
  })
})