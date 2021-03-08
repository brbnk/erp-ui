import styles from './text.module.scss'

const Input = ({ children, placeholder, handleInput }) => {
  const { input_text } = styles

  return (
    <div className={ input_text }>
      { children }
      <input
        type="text"
        placeholder={ placeholder }
        onChange={ e => handleInput(e.target.value) }
      />
    </div>
  )
}

export default Input