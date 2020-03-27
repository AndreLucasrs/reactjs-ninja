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

// const App = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Title name='André' lastName='Lucas' />
//       </div>
//     )
//   }
// })

export default App
