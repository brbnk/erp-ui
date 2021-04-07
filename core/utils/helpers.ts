export class FormHelper {
  static ToJson = (form: any) => {
    const payload = Object.keys(form).reduce((payload, key) => {
      let value: string | boolean;

      if (form[key].type == 'bool') {
        value = form[key].checked
      }
      else {
        value = form[key].value
      }

      return { ...payload, [key]: value }
    }, {})

    return payload
  }

  static SetValue = (form: any, name: any, value: any) => {
    if (form[name].type == 'bool') {
      form[name].checked = value
    }
    else {
      form[name].value = value
    }

    return form
  }

  static Clear = (form: any) => {
    Object.keys(form).forEach(field => {
      const { validator } = form[field]

      if (validator && validator > 0) {
        form[field].error.state = false
        form[field].error.messages = []
      }

      if (form[field].type == 'bool') {
        form[field].checked = false
      }
      else {
        form[field].value = ''
      }
    })

    return form
  }

  static Validator = (form: any, field: string, value: string | number | boolean) => {
    const { validator } = form[field]

    if (validator && validator.length > 0) {
      validator.forEach((v: any) => {
        let ok = v.rule(value)

        if (form[field].error.state && ok) {
          form[field].error.messages = form[field].error.messages.filter((item: string) => {
            return item !== v.message
          })
        }

        if (!ok) {
          let hasMessage = form[field].error.messages.some((item: string) => item === v.message)

          if (!hasMessage)
            form[field].error.messages.push(v.message)
        }

        form[field].error.state = form[field].error.messages.length > 0
      })
    }
  }

  static HasErrors = (form: any) => {
    return Object.keys(form).some(key => {
      const { error } = form[key]

      if (error) {
        return error.state
      }

      return false
    })
  }
}