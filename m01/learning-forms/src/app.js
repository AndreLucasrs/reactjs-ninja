'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'valor para teste'
    }
  }

  // quando usasse value e onChange o input é controlavel (controlled), quando retira esse e usa defaultValue não controlavel (uncontrolled)
  render () {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            console.log('event', e)
          }}
          onChange={(e) => {
            console.log('name ', e.target.name)
            console.log('value ', e.target.value)
          }}
        >
          <input type='text' name='name' />
          <input type='email' name='email' />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    )
  }
}

export default App
