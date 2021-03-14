import TextInput from 'components/inputs/text/text.component.jsx'
import SendIcon from '@material-ui/icons/Send'

const Form = ({ placeholder, forgetLabel, action, setInput, input }) => {
  return (
    <>
      <TextInput placeholder={placeholder} handleInput={setInput} input={input}>
        <SendIcon onClick={action} />
      </TextInput>
      <a href="" style={{ width: 'fit-content' }}> {forgetLabel} </a>
    </>
  )
}

export default Form