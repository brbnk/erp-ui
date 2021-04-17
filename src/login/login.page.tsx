import { useRouter } from 'next/router'
import { LoginForm, User } from './components/main'
import { useUserDisplayer, useLoginForm } from './hooks/main'
import { reducer, authState } from 'contexts/store/authStore'
import { useReducer } from 'react'

import styles from './login.module.scss'

function LoginPage() {
  const router = useRouter()
  const { page, login, login_container, hero } = styles

  const { user, visibility, resetUser, assignUser } = useUserDisplayer()
  const { resetForm, setPasswordForm, input, setInput, form } = useLoginForm()
  const [ state, dispatch ] = useReducer(reducer, authState)

  const changeUser = async () => {
    resetForm()
    resetUser()
  }

  const submit = async () => {
    if (user.found) {
      // Requet password
      dispatch({ type: "AUHTORIZED" })
      router.push('/dashboard')
    }

    // Request username
    if (true) {
      assignUser({
        found: true,
        name: 'Bruno Nakayabu',
        photo: 'https://resultadosdigitais.com.br/blog/files/2018/11/black-friday-para-ecommerce.jpg'
      })

      setPasswordForm()
    }
  }

  return (
    <div className={page}>
      <div className={hero}>

      </div>
      <div className={login_container}>
        <div className={login}>
          <h1> Sign in </h1>
          <User
            user={user}
            changeUser={changeUser}
            visibility={visibility}
          />
          <LoginForm
            placeholder={form.placeholder}
            forgetText={form.forgetLabel}
            action={submit}
            setInput={setInput}
            input={input}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage