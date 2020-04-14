'use strict'

import React from 'react'

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
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
