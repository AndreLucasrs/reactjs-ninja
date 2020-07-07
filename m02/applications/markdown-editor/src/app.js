'use strict'

import React, { Component } from 'react'
import { v4 } from 'node-uuid'
import './css/style.css'
import marked from 'marked'
import MarkdownEditor from 'views/editor'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})
class App extends Component {

  constructor () {
    super()

    this.clearState = () => ({
      title: '',
      value: '',
      id: v4()
    })

    this.state = { 
      ...this.clearState(),
      isSaving: null,
      files: {}
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    // exemplo sem ser usando arrow function
    // this.handleChange = function(field) {
    //   return function (e) {
    //     this.setState()
    //   }
    // }
    // quando o onChange chama essa função primeiro ele executa o field e o retorno do field é a chamada da segunda função do e
    this.handleChange = (field) => (e) => {
      this.setState({ 
        [field]: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        const newFile = {
          title: this.state.title || 'Sem titulo',
          content: this.state.value
        }
        localStorage.setItem(this.state.id, JSON.stringify(newFile))
        this.setState({ 
          isSaving: false,
          files: {
            ...this.state.files,
            [this.state.id]: newFile
          }
        })
      }
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      // let files = Object.keys(this.state.files).reduce((acc, fileId) => {
      //   return fileId === this.state.id ? acc : {
      //     ...acc,
      //     [fileId]: this.state.files[fileId]
      //   }
      // }, {})
      const { [this.state.id]: id, ...files } = this.state.files
      this.setState({ files })
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }

    this.handleOpenFile = (fileId) => () => {
      this.setState({
        title: this.state.files[fileId].title,
        value: this.state.files[fileId].content,
        id: fileId
      })
    }

  }

  componentDidMount () {
    const files = Object.keys(localStorage).filter(item => item.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/))
    this.setState({ 
      files: files.reduce((acc, fileId) => ({
          ...acc,
          [fileId]: JSON.parse(localStorage.getItem(fileId))
      }), {})
    })
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 300)
  }

  componentWillMount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
        files={this.state.files}
        handleOpenFile={this.handleOpenFile}
        title={this.state.title}
      />
    )
  }
}

export default App
