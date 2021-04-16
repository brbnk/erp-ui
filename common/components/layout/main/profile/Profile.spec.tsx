import React from 'react'
import { render } from '@testing-library/react'
import Profile from './Profile'

const props = {
  name: "Test Name Username",
  role: "Admnistrador",
  img: "https://resultadosdigitais.com.br/blog/files/2018/11/black-friday-para-ecommerce.jpg"
}

function setup() {
  const { name, role } = props
  const utils = render(<Profile {...props}/>)

  return {
    ...utils,
    name: utils.queryByText(name),
    role: utils.queryByText(role),
    img: utils.queryByAltText("Foto do Usuário")
  }
}

describe("Profile", () => {
  test('it should display the user name', () => {
    const { name } = setup()
    expect(name).toBeInTheDocument()
  })

  test('it should display the user role', () => {
    const { role } = setup()
    expect(role).toBeInTheDocument()
  })

  test('it should display a profile picture', () => {
    const { img } = setup()
    expect(img).toBeInTheDocument()
  })
})