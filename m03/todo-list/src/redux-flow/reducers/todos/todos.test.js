'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import todos from './index'
import { ADD_TODO, TOOGLE_TODO } from './actions'

it('should todo be a function', () => {
  expect(todos).to.be.a('function')
})

it('should add a todo item', () => {
  const before = deepFreeze([])
  const action = deepFreeze({
    type: ADD_TODO,
    payload: { id: 0, text: 'hey' }
  })
  const after = [{ id: 0, text: 'hey', completed: false }]
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should add a new todo item', () => {
  const before = deepFreeze([
        { id: 0, text: 'hey', completed: false }
  ])
  const action = deepFreeze({
    type: ADD_TODO,
    payload: { id: 1, text: 'ho' }
  })
  const after = [
        { id: 0, text: 'hey', completed: false },
        { id: 1, text: 'ho', completed: false }
  ]
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should toggle first todo', () => {
  const before = deepFreeze([
        { id: 0, text: 'hey', completed: false },
        { id: 1, text: 'ho', completed: false }
  ])
  const action = deepFreeze({
    type: TOOGLE_TODO,
    payload: { id: 0 }
  })
  const after = [
    { id: 0, text: 'hey', completed: true },
    { id: 1, text: 'ho', completed: false }
  ]
  expect(todos(before, action)).to.be.deep.equal(after)
})
