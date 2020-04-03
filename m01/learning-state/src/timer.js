'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }

    this.timer
  }

  // componentWillReceiveProps é executado quando o componente recebe novas propriedades
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps ', this.props, nextProps)
  }

  // componentDidMount é executado logo apos o componente ser renderizado
  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  // componentWillUnmount é executado quando vc precisa desmonstar ou remover algo, tipo o interval que foi adicionado no componentDidMount
  // se vc remover esse componentWillUnmount, vc ira verificar que ele da erro,
  // pos ele tenta mantar o interval funcionando, mesmo a gente não apresentando o componente
  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer
