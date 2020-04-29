import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from '../../global/styles'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
