import React from 'react'
import styled from 'styled-components'

import goLogo from '../../assets/img/Go_Logo_Blue.svg'

const Price = styled.span`
  font-family: 'Abril Fatface', cursive;
`

const Logo = styled.img`
  width: 129px;
  opacity: 0.62;
  left: 20%;
  position: relative;
  transform: rotate(-17deg);
  padding-bottom: 30px;
`

const Gowich = () => (
  <div className="row">
    <div className="col">
      <div className="row">
        <div className="col">
          <h3>Gowich</h3>
        </div>
        <div className="col d-xl-flex justify-content-xl-end align-items-xl-center">
          <Price className="d-xl-flex">ver.&nbsp; &nbsp; 1.13</Price>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column">
          <p>
            Think of a Gowich like a piece of avocado toast with a handcrafted, toasted seed and onion sprinkle. Serve it up with a bit of argula or
            whatever your API requirements are.
          </p>
          <Logo src={goLogo} />
        </div>
      </div>
    </div>
  </div>
)

export default Gowich
