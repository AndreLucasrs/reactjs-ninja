'use strict'

import React from 'react'
import styled from 'styled-components'
import { footerHeight } from 'utils/constants'

const MainFooter = () => (
  <Footer>
    &copy; 2020
  </Footer>
)

const Footer = styled.footer`
  align-items: center;
  height: ${footerHeight};
  color: #fff;
  display: flex;
  background: #333;
  justify-content: center;
`

export default MainFooter
