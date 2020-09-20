import React from 'react'
import styled from 'styled-components'

import stroke from '../../assets/img/stroke-1.svg'

const Container = styled.div`
  max-width: 33%;
  border-right-width: 2px;
  border-right-style: dotted;
`

const H2 = styled.h2`
  text-align: center;
`

const Stroke = styled.img`
  width: 100%;
  position: relative;
  top: -13px;
  height: 39px;
  opacity: 0.78;
  margin-bottom: 8px;
  margin-top: 8px;
`

const About = () => (
  <Container className="col flex-column flex-wrap">
    <H2 className="display-4">
      About
    </H2>
    <Stroke src={stroke} />
    <p>
      This is no better than currently available serverless solutions; it might even be a little worse. However,
      like most restaurant owners, and practically every SaaS company out there, we got bored with the options that
      were available, so we just made our own.
    </p>
  </Container>
)

export default About
