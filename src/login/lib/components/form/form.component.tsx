import TextInput from 'components/inputs/text/text.component'
import SendIcon from '@material-ui/icons/Send'

type FormType = {
  placeholder: string,
  forgetText: string,
  input: string,
  action: () => void,
  setInput: (input: string) => void
}

const Form = (f: FormType) => {
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

export default Form