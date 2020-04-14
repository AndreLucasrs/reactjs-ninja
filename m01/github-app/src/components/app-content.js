'use-strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred }) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {/*
      quando vc usa 2 exclamacoes vc esta convertendo o resultado para boleano,
      caso vc atribua 0 o valor zero sera apresentado quando vc faz dessa forma não
     */}
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length &&
      <Repos
        getRepos={getRepos}
        className='repos'
        title='Repositórios'
        repos={repos}
      />}

    {!!starred.length &&
      <Repos
        starred={starred}
        className='starred'
        title='Favoritos'
        repos={starred}
      />}
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default AppContent
