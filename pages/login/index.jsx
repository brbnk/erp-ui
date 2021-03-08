import { useEffect, useState } from 'react'

import styles from './login.module.scss'
import TextInput from 'components/inputs/text/text.component.jsx'
import SendIcon from '@material-ui/icons/Send'

const Form = ({ placeholder, forgetLabel, action }) => {
  const [ input, setInput ] = useState('')

  return (
    <>
      <TextInput placeholder={ placeholder } handleInput={ setInput }>
        <SendIcon onClick={action} />
      </TextInput>
      <a href=""> { forgetLabel } </a>
    </>
  )
}

const User = ({ user, height }) => {
  const { username } = styles
  const { name, photo, display } = user

  return (
    <div className={username} style={{display: display, height: `${height}px`}}>
      <img src={photo}/>
      <h2> {name} </h2>
      <a href=""> Trocar usuário </a>
    </div>
  )
}

function LoginPage() {
  const join = (arr) => arr.join(' ')
  const { page, line, vertical, horizontal, container } = styles

  const [form, setForm] = useState({
    placeholder: 'Enter username',
    forgetLabel: 'Esqueceu seu Username?'
  })

  const [user, setUser] = useState({
    found: false,
    name: '',
    photo: '',
    display: 'none'
  })

  const [height, setHeight] = useState(0)

  const submitUsername = () => {
    if (true) {
      setForm({
        placeholder: 'Enter password',
        forget: 'Esqueceu sua Senha?'
      })

      setUser({
        found: true,
        name: 'Bruno Nakayabu',
        photo: 'https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png',
        display: 'flex'
      })

      setHeight(250)
    }
  }

  return (
    <div className={page}>
      <span className={join([line, vertical])}/>
      <span className={join([line, horizontal])}/>

      <div className={container}>
        <h1> SIMPLE ERP SYSTEM </h1>
        <User
          height={height}
          user={user}
        />
        <Form
          placeholder={ form.placeholder }
          forgetLabel={ form.forgetLabel }
          action={ submitUsername }
        />
      </div>
    </div>
  )
}

export default LoginPage