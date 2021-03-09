import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useRouter } from 'next/router'

import styles from './login.module.scss'
import TextInput from 'components/inputs/text/text.component.jsx'
import SendIcon from '@material-ui/icons/Send'

// Form Component
const Form = ({ placeholder, forgetLabel, action, setInput, input }) => {
  return (
    <>
      <TextInput placeholder={placeholder} handleInput={setInput} input={input}>
        <SendIcon onClick={action} />
      </TextInput>
      <a href="" style={{ width: 'fit-content' }}> {forgetLabel} </a>
    </>
  )
}

// User Component
const User = ({ user, changeUser, visibility }) => {
  const { username } = styles
  const { name, photo } = user

  const wrapperProps = useSpring({
    config: { mass: 1, tension: 400, friction: 50, velocity: 0 },
    to: { height: visibility ? 250 : 0 },
    from: { height: visibility ? 0 : 250 }
  })

  return (
    <animated.div className={username} style={wrapperProps}>
      <img src={photo}/>
      <h2> {name} </h2>
      <a onClick={changeUser}> Trocar usuário </a>
    </animated.div>
  )
}

// Page
function LoginPage() {
  const router = useRouter()
  const join = (arr) => arr.join(' ')
  const { page, line, vertical, horizontal, container } = styles

  const usernameStateForm = {
    placeholder: 'Enter username',
    forgetLabel: 'Esqueceu seu Username?'
  }

  const passwordStateForm = {
    placeholder: 'Enter password',
    forgetLabel: 'Esqueceu sua Senha?'
  }

  const [form, setForm] = useState(usernameStateForm)
  const [user, setUser] = useState({})
  const [input, setInput] = useState('')
  const [visibility, setVisibility] = useState(false)

  const changeUser = async () => {
    setInput('')
    setForm(usernameStateForm)
    setVisibility(false)
    setTimeout(() => {
      setUser({})
    }, 300)
  }

  const submit = async () => {
    if (Object.keys(user).length !== 0) {
      // Requet password
      router.push('/dashboard')
    }

    // Request username
    if (true) {
      setForm(passwordStateForm)

      setUser({
        found: true,
        name: 'Bruno Nakayabu',
        photo: 'https://freepikpsd.com/wp-content/uploads/2019/10/avatar-png-2-Transparent-Images.png'
      })

      setVisibility(true)
      setInput('')
    }
  }

  return (
    <div className={page}>
      <span className={join([line, vertical])}/>
      <span className={join([line, horizontal])}/>

      <div className={container}>
        <h1> SIMPLE ERP SYSTEM </h1>
        <User
          user={user}
          changeUser={changeUser}
          visibility={visibility}
          setVisibility={setVisibility}
        />
        <Form
          placeholder={form.placeholder}
          forgetLabel={form.forgetLabel}
          action={submit}
          setInput={setInput}
          input={input}
        />
      </div>
    </div>
  )
}

export default LoginPage