import React from 'react'
import { Fastfood, GitHub } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.footer`
  background: #111111;
  color: rgb(255,255,255);
  padding: 20px;
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
          <Fastfood />
          {' '}
          by 
          {' '}
          <a href="https://www.matthewsuhay.com/">Matt Suhay</a>
          {' '}
          • 
          {' '}
          <a href="https://github.com/suhay/sandwich-shop">Sandwich Shop</a>
          {' '}
          open sourced on 
          {' '}
          <GitHub />
        </CenteredCol>
      </div>
    </div>
  </Container>
)

export default Footer
