'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const RegisterVideo = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <h2>Cadastrar Video</h2>

    <label htmlFor='id'>ID do Video:</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Titulo do Video:</label>
    <input type='text' id='title' name='title' />

    <button type='submit'>Cadastrar</button>
  </Form>
)

const Form = styled.form`
  padding: 10px
`

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (e) => {
    e.preventDefault()
    dispatch({
      type: 'videos:ADD_VIDEO',
      payload: {
        id: e.target.id.value,
        title: e.target.title.value
      }
    })
  }
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
