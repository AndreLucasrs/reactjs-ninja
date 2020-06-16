'use-strict'

import React, { PropTypes } from 'react'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'

import './app-content.css'

const AppContent = ({ userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred, handlePagination }) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {/*
      quando vc usa 2 exclamacoes vc esta convertendo o resultado para boleano,
      caso vc atribua 0 o valor zero sera apresentado quando vc faz dessa forma não
     */}
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    <div className='repos-container'>
      {!!repos.repos.length &&
        <Repos
          className='repos'
          title='Repositórios'
          repos={repos}
          handlePagination={(clicked) => handlePagination('repos', clicked)}
        />}

      {!!starred.repos.length &&
        <Repos
          className='starred'
          title='Favoritos'
          repos={starred}
          handlePagination={(clicked) => handlePagination('starred', clicked)}
        />}
    </div>
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  repos: PropTypes.object.isRequired,
  starred: PropTypes.object.isRequired
}

export default AppContent
