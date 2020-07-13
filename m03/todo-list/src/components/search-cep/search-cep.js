'use strict'

import React from 'react'

const SearchCep = ({
    address,
    city,
    code,
    district,
    state,
    status
}) => (
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
        <td>{code}</td>
        <td>{address}</td>
        <td>{district}</td>
        <td>{city}</td>
        <td>{state}</td>
      </tr>
    </tbody>
  </div>
  )

export default SearchCep
