'use strict'

import React from 'react'
import { connect } from 'react-redux'

const App = () => (
  <div>
    <input type='text' />

    <ul>
      <li style={{ textDecoration: 'line-through'}}>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>

    <div>
      <h3>Mostrar</h3>
      <span>Todos</span> | <a href=''>Finalizados</a> | <a href=''>A fazer</a>
    </div>
  </div>
)

export default connect()(App)
