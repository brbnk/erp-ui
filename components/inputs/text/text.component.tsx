import styles from './text.module.scss'

type InputTextProps = {
  children?: JSX.Element
  placeholder: string,
  input: string,
  handleInput: (input: string) => void
}

const Input = ({ children, placeholder, handleInput, input }: InputTextProps) => {
  return (
    <div className={styles.input_text}>
      <input
        type="text"
        placeholder={ placeholder }
        onChange={ e => handleInput(e.target.value) }
        value={ input }
      />
      { children }
    </div>
  )
}

export default Input