import React from 'react'
import styled from 'styled-components'

import nodeLogo from '../../assets/img/nodejs-seeklogo.com.svg'

const Price = styled.span`
  font-family: 'Abril Fatface', cursive;
`

const Logo = styled.img`
  width: 69px;
  opacity: 0.54;
  right: 98px;
  position: relative;
  transform: rotate(17deg);bottom: 31px;
`

const Nodewich = () => (
  <div className="row">
    <div className="col">
      <div className="row">
        <div className="col d-xl-flex">
          <h3 className="d-xl-flex">Nodewich</h3>
        </div>
        <div className="col d-xl-flex justify-content-xl-end align-items-xl-center">
          <Price className="d-xl-flex">ver.&nbsp; &nbsp; 12.18 / 14.05</Price>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column">
          <p>
            Pretty standard affair. Make a node application, put it up on Sandwich Shop and hope that it just
            works as expected. If it doesn't at first, don't bother trying to find API documentation because who
            does that? Also, it would probably be hot garbage anyways.
          </p>
          <Logo className="align-self-end" src={nodeLogo} />
        </div>
      </div>
    </div>
  </div>
)

export default Nodewich
