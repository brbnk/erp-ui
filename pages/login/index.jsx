import { page, line, vertical, horizontal, container } from './login.module.scss'
import Input from 'components/inputs/text/text.jsx'
import { useState } from 'react'

const Form = ({ placeholder, forget, action }) => {
  return (
    <>
      <Input placeholder={ placeholder } action={ action } />
      <a href=""> { forget } </a>
    </>
  )
}

function LoginPage() {
  const [placeholder, setPlaceholder] = useState('Enter username')
  const [forget, setForget] = useState('Esqueceu seu Username?')
  const [userFound, setUserFound] = useState(true)
  const [height, setHeight] = useState(0)

  const join = (arr) => arr.join(' ')

  const submitUsername = () => {
    if (userFound) {
      setPlaceholder('Enter password')
      setForget('Esqueceu sua Senha?')
      setHeight(300)
    }
  }

  return (
    <div className={page}>
      <span className={join([line, vertical])}/>
      <span className={join([line, horizontal])}/>

      <div className={container}>
        <h1> SIMPLE ERP SYSTEM </h1>
        <div style={{ height: `${height}px` }}> </div>
        <Form
          placeholder={ placeholder }
          forget={ forget }
          action={ submitUsername }
        />
      </div>
    </div>
  )
}

export default LoginPage