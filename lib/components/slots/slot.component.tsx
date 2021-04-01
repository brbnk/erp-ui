import React from 'react'

const Slot = ({ children, name }) => {
  const findByName = () => React.Children.toArray(children).find(
    child => child['props'].slot === name
  )

  return (
    <>
      { findByName() }
    </>
  )
}

export default Slot