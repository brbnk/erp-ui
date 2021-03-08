import { input_text } from './text.module.scss'

const Input = ({ children, placeholder }) => {
  return (
    <div className={input_text}>
      { children }
      <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input