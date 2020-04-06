'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }

  // quando usasse value e onChange o input é controlavel (controlled), quando retira esse e usa defaultValue não controlavel (uncontrolled)
  render () {
    return (
      <div>
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked
              }, () => {
                this.setState({
                  showContent: this.state.checked
                })
              })
            }}
          />
          Mostrar conteúdo
        </label>
        {this.state.showContent && <div>Olha eu aqui!</div>}
      </div>
    )
  }
}

export default App
