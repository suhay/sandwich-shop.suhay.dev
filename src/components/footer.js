import React from 'react'
import Fastfood from '@material-ui/icons/Fastfood'
import GitHub from '@material-ui/icons/GitHub'
import styled from 'styled-components'

const Container = styled.footer`
  background: #111111;
  color: rgb(255,255,255);
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CenteredCol = styled.div`
  text-align: center;
`

const Footer = () => (
  <Container>
    <div className="container">
      <div className="row">
        <CenteredCol className="col">
          Made with 
          {' '}
          <Fastfood fontSize="large" />
          {' '}
          by 
          {' '}
          <a href="https://www.matthewsuhay.com/">Matt Suhay</a>
          {' '}
          <br />
          <br />
          {' '}
          <a href="https://github.com/suhay/sandwich-shop">Sandwich Shop</a>
          {' '}
          open sourced on 
          {' '}
          <GitHub fontSize="large" />
        </CenteredCol>
      </div>
    </div>
  </Container>
)

export default Footer
