import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Container = styled.section`
  height: 100vh;
`

const orders = `orders.yml
---
getSandwich: # order name
  runtime: node9_10 # shop to run in
  path: getSandwich.js # path where function lives
  env: [] # any variables to include
makeSandwich: # order name
  runtime: go1_13 # shop to run in
  path: make_sandwich.go # path where function lives
  env: [] # any variables to include
`

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
    <Container className="container">
      Easy to configure, multi-tenant system.

      <SyntaxHighlighter language="yaml" style={railscasts} showLineNumbers>
        {orders}
      </SyntaxHighlighter>

      Write your functions in any language that you want (as long as it's Go or Node), upload your files to the tenant directory, and then call it!

      <SyntaxHighlighter language="yaml" style={railscasts}>
        {request}
      </SyntaxHighlighter>
      
    </Container>
  )
}

export default Configure
