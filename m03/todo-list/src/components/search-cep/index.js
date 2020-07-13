'use strict'

import React, { PureComponent } from 'react'
import ajax from '@fdaciuk/ajax'
import SearchCep from './search-cep'

class SearchCepContainer extends PureComponent {
  state = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 200
  }

   handleSubmit = async (e) => {
    e.preventDefault()
    const cep = e.target.cep.value
    const response = await ajax().get('https://ws.apicep.com/cep.json', { code: cep })
    console.log('Result ', response)
    this.setState(response)
  }

  render () {
    return (
      <SearchCep
        {...this.state}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchCepContainer
