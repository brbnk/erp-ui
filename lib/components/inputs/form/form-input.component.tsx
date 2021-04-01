import styles from './form-input.module.scss'

type FormInputProps = {
  type?: 'text' | 'number',
  placeholder: string,
  name: string,
  value: string | number | readonly string[],
  handleInput: (name: string, value: string | number | boolean) => void,
  style?: React.CSSProperties
}

function FormInput({ placeholder, name, value, handleInput, style = {}, type = 'text' }: FormInputProps) {
  return (
    <div className={ styles.form } style={style}>
      <input
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