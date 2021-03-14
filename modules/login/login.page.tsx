import { useState } from 'react'
import { useRouter } from 'next/router'

import { IsObjectEmpty } from 'utils/validator'
import styles from './login.module.scss'
import Form from './lib/components/form/form.component'
import User from './lib/components/user/user.component'

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
    setTimeout(() => setUser({}), 300)
  }

  const submit = async () => {
    if (!IsObjectEmpty(user)) {
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