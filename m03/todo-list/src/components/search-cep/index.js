'use strict'

import React, { PureComponent } from 'react'
import ajax from '@fdaciuk/ajax'
import SearchCep from './search-cep'

class SearchCepContainer extends PureComponent {
  async componentDidMount () {
      const response = await ajax().get('https://ws.apicep.com/cep.json', { code: '73340-406' })
      console.log('Result ', response)
  }
  render () {
    return (
      <SearchCep />
    )
  }
}

export default SearchCepContainer
