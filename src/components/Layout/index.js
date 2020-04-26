import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Filter from '../Filter'
import GlobalStyle from '../../global/styles'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Filter />

      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
