const FormGroup = ({ children, className }) => {
  return (
    <form className={ className }>
      { children }
    </form>
  )
}

export default FormGroup