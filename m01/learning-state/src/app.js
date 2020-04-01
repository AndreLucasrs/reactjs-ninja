'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'

// Componente Stateful, pq ele pode manipular estado
// ele seta um estado inicia e modifica em outro local esse estado
class App extends Component {
  constructor () {
    super()
    this.state = {
      color: 'green'
    }
  }

  render () {
    return (
      <div>
        <Square color={this.state.color} />
        {['red', 'green', 'blue'].map((color) => (
          <Button
            key={color}
            handleClick={() => this.setState({ color })}
          >
            {color}
          </Button>
        ))}
      </div>
    )
  }
}

export default App
