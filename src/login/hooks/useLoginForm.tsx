import { useState } from 'react'

type LoginFormTexts = {
  placeholder: string,
  forgetLabel: string
}

const usernameStateForm: LoginFormTexts = {
  placeholder: 'Enter username',
  forgetLabel: 'Esqueceu seu Username?'
}

const passwordStateForm: LoginFormTexts = {
  placeholder: 'Enter password',
  forgetLabel: 'Esqueceu sua Senha?'
}

function useLoginForm() {
  const [form, setForm] = useState(usernameStateForm)
  const [input, setInput] = useState('')

  const resetForm = () => {
    setInput('')
    setForm(usernameStateForm)
  }

  const setPasswordForm = () => {
    setInput('')
    setForm(passwordStateForm)
  }

  return { resetForm, setPasswordForm, setInput, input, form }
}

export { useLoginForm }