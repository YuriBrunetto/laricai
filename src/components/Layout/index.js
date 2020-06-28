import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from '../../global/styles'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children, internal }) => {
  return (
    <>
      <GlobalStyle internal={internal} />

      <Header internal={internal} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  internal: PropTypes.bool,
}

export default Layout
