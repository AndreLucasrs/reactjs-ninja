'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'André'
    }
  }

  render () {
    return (
      <div className='container' onClick={() => this.setState({ text: 'André Lucas' })}>
        {this.state.text}
      </div>
    )
  }
}

export default App
