'use strict'

import React from 'react'

// Componente Stateless, não manipula estado
const Button = ({ children, handleClick }) => (
  <button className='main-button' onClick={(handleClick)}>
    {children}
  </button>
)

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Button.prototype = {
  handleClick: React.PropTypes.func.isRequired
}

export default Button
