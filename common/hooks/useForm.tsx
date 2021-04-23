import { useState } from 'react'
import { FormHelper } from 'core/utils/helpers'
import { Form } from 'core/types/form/form'

export function useForm<T>(f: Form<T>) {
  const [ form, setForm ] = useState<Form<T>>(f)

  function submit() {
    const hasErrors = FormHelper.HasErrors(form)

    if (hasErrors) {
      alert()
      return
    }

    const payload = FormHelper.ToJson(form)
    return payload
  }

  function clear() {
    const clearedForm = FormHelper.Clear({ ...form })
    setForm({ ...clearedForm })
  }

  function set(name: string, value: string | number | boolean) {
    const newForm = { ...form }

    FormHelper.Validator(newForm, name, value)

    const dirtyForm = FormHelper.SetValue(newForm, name, value)

    setForm({ ...dirtyForm })
  }

  return { submit, clear, set, form }
}