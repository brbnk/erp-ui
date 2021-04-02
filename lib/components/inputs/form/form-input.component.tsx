import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styles from './form-input.module.scss'
import { Error } from 'core/types'

type HandleInput = (name: string, value: string) => void

interface FormInputProps {
  error?: Error,
  type?: 'text' | 'number',
  placeholder: string,
  name: string,
  value: string | number | readonly string[],
  handleInput: HandleInput,
  style?: React.CSSProperties
}

function FormInput({
  placeholder,
  name,
  value,
  handleInput,
  style = {},
  type = 'text',
  error = { state: false, messages: [] }
}: FormInputProps) {
  const [ over, setOver ] = useState<boolean>(false)

  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: .8 },
    config: { mass: 5, tension: 200, friction: 80 },
    reset: !over
  })

  return (
    <div className={ styles.form } style={style}>
      <input
        style={{ 'border': error.state ? '2px solid red' : null }}
        type={ type }
        name={ name }
        value={ value }
        onChange={ e => handleInput(name, e.target.value) }
        required={ true }
        onMouseOver={ _ => setOver(true) }
        onMouseOut={ _ => setOver(false)}
      />
      <span className={ styles.placeholder }> { placeholder } </span>
      { error.state && over ?
        <animated.ul className={ styles.errors } style={spring}>
          { error.messages.map((m: string, index: number)  =>
            <animated.li key={index} style={spring}> {m} </animated.li> )}
        </animated.ul> : null
      }
    </div>
  )
}

export default FormInput