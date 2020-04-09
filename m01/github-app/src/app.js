'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      user: null
    }
  }

  handleSearch (e) {
    const value = e.target.value
    this.setState({ user: value })
    const URL_API = 'https://api.github.com/users'
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      ajax().get(`${URL_API}/${value}`)
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            }
          })
        })
    }
  }

  getRepos () {
    const URL_API = 'https://api.github.com/users'
    ajax().get(`${URL_API}/${this.state.user}/repos`)
      .then((result) => {
        this.setState({
          repos: result
        })
      })
  }

  getStarred () {
    const URL_API = 'https://api.github.com/users'
    ajax().get(`${URL_API}/${this.state.user}/starred`)
      .then((result) => {
        this.setState({
          starred: result
        })
      })
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={() => this.getRepos()}
        getStarred={() => this.getStarred()}
      />
    )
  }
}

export default App
