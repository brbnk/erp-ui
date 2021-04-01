import { useState, ChangeEvent } from 'react'

import styles from './checkbox.module.scss'

type CheckboxProps = {
  name: string,
  label: string,
  value: boolean,
  handleInput: (name: string, value: string | number | boolean) => void,
}

const Checkbox = ({ name, label, value, handleInput }: CheckboxProps) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        name={ name }
        checked={ value }
        onChange={ e => handleInput(name, e.target.checked) }
      />
      <span> { label } </span>
    </div>
  )
}

export default Checkbox