'use strict'

import React from 'react'

// Componente Stateless, não manipula estado
const Square = ({ color }) => (
  <div
    style={{
      backgroundColor: color,
      height: '100px',
      width: '100px'
    }}
  />
)

Square.defaultProps = {
  color: 'red'
}

export default Square
