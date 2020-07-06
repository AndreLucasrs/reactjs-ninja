import React, { PropTypes } from 'react'

const Header = ({ isSaving, handleRemove, handleCreate }) => (
  <header className='editor-header'>
    <p className='save-message'>
      {isSaving ? 'Salvando...' : 'Salvo!'}
    </p>

    <button onClick={handleCreate}>
        Criar Novo
    </button>

    <button onClick={handleRemove}>
        Remover
    </button>
  </header>
)

Header.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default Header
