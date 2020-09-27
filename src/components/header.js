import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/img/sandwich-shop.svg'

const Container = styled.header`
  padding-bottom: 8px;
  background-color: #111111;
  position: relative;
  height: 100vh;
`

const Logo = styled.img`
  position: absolute;
  width: 500px;
`

const Video = styled.div`
  background: radial-gradient(circle, transparent 30%, black 90%);
  filter: blur(15px);
  opacity: 0.1;
  height: 100%;
  & video {
    object-fit: cover;
  }
`

const Header = ({ siteTitle }) => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
    >
      <Video className="embed-responsive embed-responsive-16by9">
        <video loop muted autoPlay className="fullscreen-bg__video">
          <source src="https://suhay.dev/sandwich-shop/video/27100114-sd.webm" type="video/webm" />
          <source src="https://suhay.dev/sandwich-shop/video/27100114-sd.mp4" type="video/mp4" />
        </video>
      </Video>
      <Logo className="color-logo" src={logo} alt={siteTitle} />
    </Container>
  )
}

export default Header
