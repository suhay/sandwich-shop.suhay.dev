import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abril+Fatface" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredericka+the+Great" />
      </Helmet>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
