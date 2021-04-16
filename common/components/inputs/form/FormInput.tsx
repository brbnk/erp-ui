import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styles from './FormInput.module.scss'
import { Error } from 'core/types'

type HandleInput = (name: string, value: string) => void

interface FormInputProps {
  error?: Error,
  type?: 'text' | 'number',
  label: string,
  name: string,
  value: string | number | readonly string[],
  handleInput: HandleInput,
  style?: React.CSSProperties
}

function FormInput({
  label,
  name,
  value,
  handleInput,
  style = {},
  type = 'text',
  error = { state: false, messages: [] }
}: FormInputProps) {
  const [ mouseOver, setMouseOver ] = useState<boolean>(false)

  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: .8 },
    config: { mass: 5, tension: 200, friction: 80 },
    reset: !mouseOver
  })

  return (
    <div className={ styles.form } style={ style }>
      <input
        id={ name }
        style={{ 'border': error.state ? '2px solid red' : null }}
        type={ type }
        name={ name }
        value={ value }
        onChange={ e => handleInput(name, e.target.value) }
        required={ true }
        onMouseOver={ _ => { setMouseOver(true) }}
        onMouseOut={ _ => setMouseOver(false) }
      />
      <label className={styles.placeholder} htmlFor={name}> { label } </label>
      { error.state && mouseOver ?
        <animated.ul className={ styles.errors } style={spring}>
          {
            error.messages.map((m: string, index: number)  =>
              <animated.li key={index} style={spring}> {m} </animated.li>)
          }
        </animated.ul> : null
      }
    </div>
  )
}

export default FormInput