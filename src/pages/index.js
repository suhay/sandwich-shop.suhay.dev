import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import ReactPageScroller from 'react-page-scroller'

import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

import SEO from '../components/seo'
import About from '../components/about'
import Nodewich from '../components/nodewich'
import Gowich from '../components/gowich'
import Configuration from '../components/configure'

import Star from '../components/fragments/star'
import Tomato from '../components/fragments/tomato'
import Cheese from '../components/fragments/cheese'

import border from '../../assets/img/border.svg'
import blackBoard from '../../assets/img/black-board.svg'
import flag from '../../assets/img/flag.svg'
import stroke2 from '../../assets/img/stroke-2.svg'

const Main = styled.main`
  padding-top: 10px;
  min-height: 100vh;
  background-color: #111111;
  color: rgb(255, 255, 255);
  background-image: url(${blackBoard});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: top;
`

const Container = styled.div`
  min-height: 90vh;
  height: 100%;
  border: 30px solid;
  border-image-source: url(${border});
  border-image-slice: 14%;
  border-image-repeat: round;
`

const RotateCounterClockwise = styled.span`
  width: 68px;
  position: absolute;
  transform: rotate(-45deg);
  left: -9px;
  line-height: 1.2em;
  text-align: center;
  top: -1px;
`

const RotateClockwise = styled.span`
  position: absolute;
  right: -10px;
  transform: rotate(45deg);
  width: 68px;
  top: 2px;
`

const SandwichStroke = styled.img`
  width: 300px;
  margin-bottom: 17px;
  opacity: 0.79;
`

const MenuSection = styled.div`
  border-top-style: solid;
  padding-top: 10px;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <ReactPageScroller>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>
          <Container className="container">
            <div className="row">
              <div className="col">
                <RotateCounterClockwise className="text-center d-block">
                  Ask
                  <br />
                  about our specials!
                </RotateCounterClockwise>
              </div>
              <div className="col">
                <RotateClockwise className="text-center flex-grow-0 flex-shrink-1 align-self-start">
                  Free WiFi!
                </RotateClockwise>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-5 d-lg-flex justify-content-end d-none">
                <Cheese width={35} rotate={20} left={25} bottom={44} />
                <Cheese width={24} rotate={128} left={174} top={11} />
                <Star width={35} rotate={57} left={101} bottom={19} />
                <Star width={23} rotate={85} left={73} bottom={78} />
                <Star width={31} rotate={85} left={232} top={26} />
                <Tomato width={35} rotate={20} left={100} top={30} />
                <img src={flag} alt="" />
              </div>
              <div className="col-lg-2 col-12 d-flex flex-column flex-shrink-1 justify-content-center align-items-center">
                <Img className="logo" alt="Sandwich Shop" fixed={data.logo.childImageSharp.fixed} />
              </div>
              <div className="col-5 d-lg-flex d-none">
                <img className="mirror" src={flag} alt="" />
                <Star width={47} rotate={26} right={101} top={19} />
                <Tomato width={51} rotate={73} right={60} top={121} />
                <Cheese width={35} rotate={84} right={214} top={11} />
                <Star width={16} rotate={48} right={84} bottom={91} />
                <Star width={23} rotate={22} right={145} bottom={15} />
              </div>
            </div>
            <MenuSection className="row">
              <About />
              <div className="col">
                <div className="row">
                  <div className="col text-center">
                    <h2 className="display-4">
                      Sandwiches
                    </h2>
                    <SandwichStroke src={stroke2} />
                  </div>
                </div>
                <Nodewich />
                <Gowich />
              </div>
            </MenuSection>
          </Container>
        </Main>
        <Configuration />
        <Footer />
      </ReactPageScroller>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "sandwich-shop.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
