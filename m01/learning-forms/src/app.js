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
        <form>
          <textarea defaultValue={this.state.value} />
        </form>
      </div>
    )
  }
}

export default App
