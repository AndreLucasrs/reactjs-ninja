import React, { PropTypes } from 'react'

const Header = ({ isSaving }) => (
  <header className='editor-header'>
    <p className='save-message'>
      {isSaving ? 'Salvando...' : 'Salvo!'}
    </p>
  </header>
)

Header.propTypes = {
  isSaving: PropTypes.bool.isRequired
}

export default Header
