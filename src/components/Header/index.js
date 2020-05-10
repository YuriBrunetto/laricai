import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { HeaderWrapper } from './styles'

const Header = ({ internal }) => (
  <HeaderWrapper internal={internal}>
    <div className="common-limiter">
      <Link to="/" title="LariCaí 🏠🛵💨📱">
        <h1>
          LariCaí{' '}
          <span role="img" aria-label="LariCaí">
            🏠🛵💨📱
          </span>
        </h1>
      </Link>

      {!internal && (
        <h2>
          Guia de restaurantes e <strong>bares</strong> com{' '}
          <strong>tele-entrega</strong> no Vale do Caí - RS.
        </h2>
      )}
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  internal: PropTypes.bool,
}

export default Header
