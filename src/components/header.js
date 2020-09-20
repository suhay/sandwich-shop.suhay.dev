import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/img/sandwich-shop.svg'

const Container = styled.header`
  padding-bottom: 8px;
  background-color: #111111;
  position: relative;
`

const Logo = styled.img`
  position: absolute;
  width: 500px;
`

const Header = ({ siteTitle }) => {
  return (
    <Container
      className="d-xl-flex justify-content-xl-center align-items-xl-center"
    >
      <div className="embed-responsive embed-responsive-16by9 video">
        <video loop muted autoPlay poster="shutterstock_1131563363" className="fullscreen-bg__video">
          <source src="https://sandwich-shop.suhay.dev/video/27100114-sd.webm" type="video/webm" />
          <source src="https://sandwich-shop.suhay.dev/video/27100114-sd.mp4" type="video/mp4" />
        </video>
      </div>
      <Logo className="color-logo" src={logo} alt={siteTitle} />
    </Container>
  )
}

export default Header
