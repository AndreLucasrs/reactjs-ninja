'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars3.githubusercontent.com/u/12537847?v=4' />
    <h1 className='username'>
      <a href='https://github.com/AndreLucasrs'>
                André Lucas
      </a>
    </h1>

    <ul className='repos-info'>
      <li>- Repositórios: 23</li>
      <li>- Seguidores: 7</li>
      <li>- Seguindo: 50</li>
    </ul>
  </div>
)

export default UserInfo
