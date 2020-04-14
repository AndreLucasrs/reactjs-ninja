'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search'>
    <input
      type='search'
      disabled={isDisabled}
      placeholder='Digite o nome do usuário no GitHub'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.protoTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
