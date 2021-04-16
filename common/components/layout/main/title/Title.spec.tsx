import React from 'react'
import { render } from '@testing-library/react'
import Title from './Title'

const props = {
  text: 'Page Test Title'
}

describe('Title', () => {
  test('it should display the page title', () => {
    const container = render(<Title {...props} />)
    expect(container.queryByText(props.text)).toBeInTheDocument()
  })
})