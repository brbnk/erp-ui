import styles from './text.module.scss'

type InputText = {
  children?: React.ReactNode
  placeholder: string,
  handleInput: (input: string) => void,
  input: string
}

const Input = ({ children, placeholder, handleInput, input }: InputText) => {
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