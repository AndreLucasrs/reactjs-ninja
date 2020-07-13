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
  async componentDidMount () {
    const response = await ajax().get('https://ws.apicep.com/cep.json', { code: '73340-406' })
    console.log('Result ', response)
    this.setState(response)
  }
  render () {
    return (
      <SearchCep {...this.state} />
    )
  }
}

export default SearchCepContainer
