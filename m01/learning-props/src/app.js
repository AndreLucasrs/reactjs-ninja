'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'

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
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

export default App
