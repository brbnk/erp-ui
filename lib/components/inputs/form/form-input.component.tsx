import { useState } from 'react'

import styles from './form-input.module.scss'

type FormInput = {
  type?: 'text' | 'number',
  placeholder: string,
  name: string,
  handleInput: (name: string, value: string | number | boolean) => void,
  style?: React.CSSProperties
}

function FormInput({ placeholder, name, handleInput, style = {}, type = 'text' }: FormInput) {
  const [ input, setInput ] = useState<string>('')

  return (
    <div className={ styles.form } style={style}>
      <input
        type={ type }
        name={ name }
        value={ input }
        onChange={ e => { handleInput(name, e.target.value); setInput(e.target.value) } }
        required={ true }
      />
      <span> { placeholder } </span>
    </div>
  )
}

export default FormInput