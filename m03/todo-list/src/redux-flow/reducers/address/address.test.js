'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import address from './index'
import { SUCCESS } from './actions'

it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 200,
    isFetching: true,
    message: ''
  })

  const action = deepFreeze({
    type: SUCCESS,
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
    isFetching: false,
    message: ''
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
