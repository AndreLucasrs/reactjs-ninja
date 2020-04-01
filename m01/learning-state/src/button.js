'use strict'

import React from 'react'

// Componente Stateless, não manipula estado
const Button = ({ children, handleClick }) => (
  <button className='main-button' onClick={(handleClick)}>
    {children}
  </button>
)

export default Button
