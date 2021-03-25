import { ChangeEvent } from 'react'

type FormInput = {
  placeholder: string,
  name: string,
  handleInput: (target: ChangeEvent<HTMLInputElement>) => void
}

function FormInput({ placeholder, name, handleInput }: FormInput) {
  return (
    <div>
      <input
        type="text"
        name={ name }
        placeholder={ placeholder }
        onChange={ e => handleInput(e) }
      />
    </div>
  )
}

export default FormInput