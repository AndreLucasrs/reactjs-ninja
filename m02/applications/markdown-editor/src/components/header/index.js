import React, { PropTypes } from 'react'

const Header = ({ onSave }) => (
  <header className='editor-header'>
    <button onClick={onSave} className='save-message'>Salvar</button>
  </header>
)

Header.propTypes = {
  onSave: PropTypes.func.isRequired
}

export default Header
