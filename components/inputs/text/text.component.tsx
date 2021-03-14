import styles from './text.module.scss'

const Input = ({ children, placeholder, handleInput, input }) => {
  const { input_text } = styles

  return (
    <div className={ input_text }>
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