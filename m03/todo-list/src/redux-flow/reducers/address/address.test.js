'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { UPDATE_ADDRESS } from './actions'

it('address should be a function', () => {
  expect(address).to.be.a('function')
})

it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 200,
    isFetching: false,
    message: ''
  })

  const action = deepFreeze({
    type: UPDATE_ADDRESS,
    payload: {
      address: 'Quadra 4 Conjunto 4F',
      city: 'Brasília',
      code: '73340406',
      district: 'Jardim Roriz (Planaltina)',
      state: 'DF',
      status: 200,
      message: ''
    }
  })

  const after = {
    address: 'Quadra 4 Conjunto 4F',
    city: 'Brasília',
    code: '73340406',
    district: 'Jardim Roriz (Planaltina)',
    state: 'DF',
    status: 200,
    message: ''
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
