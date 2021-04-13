const Template = ({ children, slot }) => {
  return (
    <div slot={slot}>
      { children }
    </div>
  )
}

export default Template