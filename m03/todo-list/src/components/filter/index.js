'use strict'

import React from 'react'
import { connect } from 'react-redux'
import * as actions from 'reducers/visibility-filter/actions'

const filterItems = [
    { label: 'Todos', action: actions.SHOW_ALL },
    { label: 'Finalizados', action: actions.SHOW_COMPLETED },
    { label: 'A Fazer', action: actions.SHOW_ACTIVE }
]

const Filter = ({ activeFilter }) => (
  <div>
    <h3>Mostrar</h3>
    {filterItems.map((item) => {
      if (item.action === activeFilter) {
        return <span style={{ marginRight: 10 }} key={item.action}>{item.label}</span>
      }
      return <a style={{ marginRight: 10 }} href='' key={item.action}>{item.label}</a>
    })}
  </div>
)

const mapsStateToProps = (state) => ({
  activeFilter: state.visibilityFilter
})

export default connect(mapsStateToProps)(Filter)
