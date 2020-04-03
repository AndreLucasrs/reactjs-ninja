'use strict'

import React, { Component } from 'react'
import Timer from './timer'

// Componente Stateful, pq ele pode manipular estado
// ele seta um estado inicia e modifica em outro local esse estado
class App extends Component {
  constructor () {
    console.log('constructor App')
    super()
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  // componentWillMount é executado antes do componente ser renderizado
  componentWillMount () {
    console.log('componentWillMount App ')
  }

  // componentDidMount é executado logo apos o componente ser renderizado
  componentDidMount () {
    console.log('componentDidMount App ')
  }

  render () {
    console.log('render App')
    return (
      <div>
        <Timer time={this.state.time} />
        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}
        >Change props
        </button>
      </div>
    )
  }
}

export default App
