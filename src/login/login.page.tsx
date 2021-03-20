import { useRouter } from 'next/router'
import { Form, User } from './lib/components/main'
import { useUserDisplayer, useLoginForm } from './lib/hooks/main'
import { reducer, authState } from 'store/authStore'
import { useReducer } from 'react'

import styles from './login.module.scss'

function LoginPage() {
  const router = useRouter()
  const join = (arr: Array<string>) => arr.join(' ')
  const { page, container } = styles

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
        photo: 'https://mlkgqpwrt1na.i.optimole.com/jYEI2CY-j_4Wfhth/w:auto/h:auto/q:auto/https://www.negretti.com.br/wp-content/uploads/2020/05/O-QUE-E-ECOMMERCE.jpg'
      })

      setPasswordForm()
    }
  }

  return (
    <div className={page}>
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