import { input_text } from './text.module.scss'
import SendInput from '@material-ui/icons/Send'

const Input = ({ placeholder, action }) => {
  return (
    <div className={input_text}>
      <SendInput onClick={action} />
      <input type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input