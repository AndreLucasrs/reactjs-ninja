'use strict'

import React, { Component } from 'react'
import Button from './button'
// import Timer from './timer'

// Componente Stateful, pq ele pode manipular estado
// ele seta um estado inicia e modifica em outro local esse estado
class App extends Component {
  // constructor () {
  //   console.log('constructor App')
  //   super()
  //   this.state = {
  //     time: 0,
  //     showTimer: true
  //   }
  // }

  // // componentWillMount é executado antes do componente ser renderizado
  // componentWillMount () {
  //   console.log('componentWillMount App ')
  // }

  // m1#a26
  // // componentDidMount é executado logo apos o componente ser renderizado
  // componentDidMount () {
  //   console.log('componentDidMount App ')
  // }

  render () {
    console.log('render App')
    return (
      <div>
        <Button>
         Clique em mim
        </Button>
      </div>
    )
  }
}

export default App
