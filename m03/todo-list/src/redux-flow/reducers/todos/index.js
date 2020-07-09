'use strict'

import { ADD_TODO, TOOGLE_TODO } from './actions'

const initialState = []

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    case TOOGLE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
  }
}

export default todos
