import styles from './checkbox.module.scss'

type CheckboxProps = {
  name: string,
  label: string,
  handleInput: (name: string, value: boolean) => void,
}

const Checkbox = ({ name, label, handleInput }: CheckboxProps) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        name={ name }
        onChange={ e => handleInput(name, e.target.checked) }
      />
      <span> { label } </span>
    </div>
  )
}

export default Checkbox