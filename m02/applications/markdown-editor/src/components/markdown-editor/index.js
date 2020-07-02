'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditor = ({ value, handleChange }) => (
  <div className='editor'>
    <textarea value={value} onChange={handleChange} />

    <div className='view'>
      {value}
    </div>
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRquired,
  handleChange: PropTypes.func.isRquired
}

export default MarkdownEditor
