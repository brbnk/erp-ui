import styles from './form-input.module.scss'
import { Error } from 'core/types'

type HandleInput = (name: string, value: string) => void

interface FormInputProps {
  error?: Error,
  type?: 'text' | 'number',
  placeholder: string,
  name: string,
  value: string | number | readonly string[],
  handleInput: HandleInput,
  style?: React.CSSProperties
}

function FormInput({
  placeholder,
  name,
  value,
  handleInput,
  style = {},
  type = 'text',
  error = { state: false, messages: [] }
}: FormInputProps) {
  return (
    <div className={ styles.form } style={style}>
      <input
        style={{ 'border': error.state ? '1px solid red' : null }}
        type={ type }
        name={ name }
        value={ value }
        onChange={ e => handleInput(name, e.target.value) }
        required={ true }
      />
      <span> { placeholder } </span>
    </div>
  )
}

export default FormInput