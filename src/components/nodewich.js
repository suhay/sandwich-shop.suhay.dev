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
            The tried and true turkey on wheat, no routes or middleware needed, cold starts are a waste of time, just place my order so
            I can get back to work, kind of -wich. Best served with a massive helping of mashed node_modules and a lodash of oregano.
          </p>
          <Logo className="align-self-end" src={nodeLogo} />
        </div>
      </div>
    </div>
  </div>
)

export default Nodewich
