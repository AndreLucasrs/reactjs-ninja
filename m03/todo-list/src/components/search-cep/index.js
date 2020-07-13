'use strict'

import React from 'react'

const SearchCep = () => (
  <div>
    <form>
      <input type='text' name='cep' placeholder='Buscar endereço' />
      <button type='submit'>Buscar Endereço</button>
    </form>
    <table>
      <thead>
        <tr>
          <td>CEP</td>
          <td>Endereço</td>
          <td>Bairro</td>
          <td>Cidade</td>
          <td>Estado</td>
        </tr>
      </thead>
    </table>

    <tbody>
      <tr>
        <td>7777777</td>
        <td>Rua tal</td>
        <td>Bairro tal</td>
        <td>Cidade tal</td>
        <td>Estado tal</td>
      </tr>
    </tbody>
  </div>
)

export default SearchCep
