import { TextInput } from 'common/components/inputs'
import SendIcon from '@material-ui/icons/Send'

type FormType = {
  placeholder: string,
  forgetText: string,
  input: string,
  action: () => void,
  setInput: (input: string) => void
}

const LoginForm = (f: FormType) => {
  return (
    <>
      <TextInput
        placeholder={f.placeholder}
        handleInput={f.setInput}
        input={f.input}
      >
        <SendIcon onClick={f.action} />
      </TextInput>
      <a href="" style={{ width: 'fit-content' }}> {f.forgetText} </a>
    </>
  )
}

export default LoginForm