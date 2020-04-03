'use strict'

import React, { Component } from 'react'
import Timer from './timer'

// Componente Stateful, pq ele pode manipular estado
// ele seta um estado inicia e modifica em outro local esse estado
class App extends Component {
  constructor () {
    console.log('constructor')
    super()
    this.state = {
      showTimer: true
    }
  }

  // componentWillMount é executado antes do componente ser renderizado
  componentWillMount () {
    console.log('componentWillMount')
  }

  // componentDidMount é executado logo apos o componente ser renderizado
  componentDidMount () {
    console.log('componentDidMount')
  }

  render () {
    console.log('render')
    return (
      <div>
        {this.state.showTimer && <Timer />}
        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}
        >Show / hide timer
        </button>
      </div>
    )
  }
}

export default App
