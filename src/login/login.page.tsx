import { useRouter } from 'next/router'
import { Form, User } from './lib/components/main'
import { useUserDisplayer, useLoginForm } from './hooks/main'
import { reducer, authState } from 'store/authStore'
import { useReducer } from 'react'

import styles from './login.module.scss'

function LoginPage() {
  const router = useRouter()
  const join = (arr: Array<string>) => arr.join(' ')
  const { page, line, vertical, horizontal, container } = styles

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
        photo: 'https://freepikpsd.com/wp-content/uploads/2019/10/avatar-png-2-Transparent-Images.png'
      })

      setPasswordForm()
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
          forgetText={form.forgetLabel}
          action={submit}
          setInput={setInput}
          input={input}
        />
      </div>
    </div>
  )
}

export default LoginPage