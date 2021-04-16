import styles from './Checkbox.module.scss'

interface CheckboxProps {
  name: string,
  label: string,
  value: boolean,
  handleInput: (name: string, value: boolean) => void,
}

const Checkbox = ({ name, label, value, handleInput }: CheckboxProps) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={value}
        onChange={e => handleInput(name, e.target.checked)}
      />
      <label htmlFor={name}> {label} </label>
    </div>
  )
}

export default Checkbox