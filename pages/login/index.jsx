import { useState } from 'react'

import { page, line, vertical, horizontal, container } from './login.module.scss'
import TextInput from 'components/inputs/text/text.jsx'
import SendInput from '@material-ui/icons/Send'

const Form = ({ placeholder, forget, action }) => {
  return (
    <>
      <TextInput placeholder={ placeholder }>
        <SendInput onClick={action} />
      </TextInput>
      <a href=""> { forget } </a>
    </>
  )
}

function LoginPage() {
  const [form, setForm] = useState({
    placeholder: 'Enter username',
    forget: 'Esqueceu seu Username?'
  })

  const [user, setUser] = useState({
    found: false,
    name: ''
  })

  const [height, setHeight] = useState(0)

  const join = (arr) => arr.join(' ')

  const submitUsername = () => {
    if (true) {
      setForm({
        placeholder: 'Enter password',
        forget: 'Esqueceu sua Senha?'
      })

      setUser({
        found: true,
        display: true,
        name: 'Bruno Nakayabu'
      })

      setHeight(300)
    }
  }

  return (
    <div className={page}>
      <span className={join([line, vertical])}/>
      <span className={join([line, horizontal])}/>

      <div className={container}>
        <h1> SIMPLE ERP SYSTEM </h1>
        <div style={{ display: user.found ? 'block' : 'none', height: `${height}px` }}>
          <h1> {user.name} </h1>
        </div>
        <Form
          placeholder={ form.placeholder }
          forget={ form.forget }
          action={ submitUsername }
        />
      </div>
    </div>
  )
}

export default LoginPage