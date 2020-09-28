import React from 'react'
import styled from 'styled-components'

import stroke from '../../assets/img/stroke-1.svg'

const Container = styled.div`
  border-right-width: 2px;
  border-right-style: dotted;
  @media (max-width: 768px) {
    border: 0;
  }
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
  <Container className="col col-md-7 flex-column flex-wrap">
    <H2 className="display-4">
      About
    </H2>
    <Stroke src={stroke} />
    <p>
      It was during a lunchtime visit to a Subway restrauant, of all places, when inspiration struck. I had just finished my meal, I began pushing around
      I lost meatball with my finger on my tray when I looked up at my still eaiting lunchin companions, "Current Serverless solutions are so very
      so inefficant now a days. When I want some work done, I place an order, it is the equivelent of if I wanted another Subway sandwich, but instead
      of just coming to the store I would, instead, have to build a brand new store, staff it, stock it, licence it, and then place my order. Then, after
      the order is complete, tear down the whole place and fire everyone each time." I, of course, was met with gapped mouths. Shocked? Possibly. Or maybe
      I just caught them in mid bite? Most definately.
    </p>
    <p>
      This is no better than currently available serverless solutions; it might even be a little worse. However,
      like most restaurant owners, and practically every SaaS company out there, we got bored with the options that
      were available so we just made our own. Instead of managing a new store to get some work done, why not just place an order and be on your way?
    </p>
    <p>
      That was the question we sought out to answer with this experiment. But, please note, this is just an experiment and is not meant for production
      deployments. You have been warned!
    </p>
  </Container>
)

export default About
