import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import rocket from '../../assets/img/cbc_rocket.svg'
import smoke from '../../assets/img/wind.svg'

const Container = styled.section`
  height: 100vh;
  background: #0F2027;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  p {
    color: #FFF;
  }

  pre {
    height: 100%;
  }
`

const orders = `# {tenant-id}/orders.yml
---
getSandwich: # order name
  runtime: node9_10 # shop to run in
  path: getSandwich.js # path where function lives
  env: [] # any variables to include
makeSandwich: # order name
  runtime: go1_13 # shop to run in
  path: make_sandwich.go # path where function lives
  env: [] # any variables to include`

const request = `POST https://sandwiches.example.com/shop/sudo/makeSandwich
{
  Authorization: Bearer ham-and-cheese-api-key
}

200 OK
{
  "Bread": "Rye",
  "Mayo": "true",
  "Veggies": ["Lettuce", "Tomato", "Onion"],
  "Meat": ["Bacon"],
  "Cheese": ["Munster", "Provolone"],
}`

const Configure = () => {
  return (
    <Container>
      <div className="row py-3">
        <div className="col-5 d-lg-flex justify-content-end d-none">
          <img src={smoke} className="mirror" alt="" />
        </div>
        <div className="col-lg-2 col-12 d-flex flex-column flex-shrink-1 justify-content-center align-items-center">
          <img src={rocket} alt="" />
        </div>
        <div className="col-5 d-lg-flex d-none">
          <img src={smoke} alt="" />
        </div>
      </div>
      <section className="container">
        <h2 style={{ fontFamily: 'sans-serif', color: '#FFF' }}>
          Why Sandwich Shop?
        </h2>
        <div className="row">
          <div className="col col-md-6">
            <p>Easy to configure, multi-tenant system.</p>
          </div>
          <div className="col col-md-6">
            <p>Write your functions in any language that you want (as long as it's Go or Node), upload your files to the tenant directory, and then call it!</p>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-6">
            <SyntaxHighlighter language="yaml" style={railscasts} showLineNumbers>
              {orders}
            </SyntaxHighlighter>
          </div>
          <div className="col col-md-6">
            <SyntaxHighlighter language="yaml" style={railscasts}>
              {request}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Configure
