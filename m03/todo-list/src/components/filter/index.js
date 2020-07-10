'use strict'

import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'reducers/visibility-filter/actions'
import { setVisibilityFilter } from 'reducers/visibility-filter/action-creators'

const filterItems = [
    { label: 'Todos', action: actions.SHOW_ALL },
    { label: 'Finalizados', action: actions.SHOW_COMPLETED },
    { label: 'A Fazer', action: actions.SHOW_ACTIVE }
]

const Filter = ({ activeFilter, handleFilter }) => (
  <div>
    <h3>Mostrar</h3>
    {filterItems.map((item) => {
      if (item.action === activeFilter) {
        return (
          <span
            style={{ marginRight: 10 }}
            key={item.action}
            >
            {item.label}
          </span>
        )
      }
      return (
        <a
          style={{ marginRight: 10 }}
          href=''
          key={item.action}
          onClick={handleFilter(item.action)}
            >
          {item.label}
        </a>
      )
    })}
  </div>
)

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (filter) => (e) => {
    e.preventDefault()
    dispatch(setVisibilityFilter(filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
