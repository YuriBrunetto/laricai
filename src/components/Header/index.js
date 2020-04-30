import React from 'react'
import { Link } from 'gatsby'

import { HeaderWrapper } from './styles'

const Header = () => (
  <HeaderWrapper>
    <div className="common-limiter">
      <Link to="/" title="LariCaí 🏠🛵💨📱">
        <h1>
          LariCaí{' '}
          <span role="img" aria-label="LariCaí">
            🏠🛵💨📱
          </span>
        </h1>
      </Link>
      <h2>
        Guia de restaurantes e <strong>bares</strong> com{' '}
        <strong>tele-entrega</strong> no Vale do Caí - RS.
      </h2>
    </div>
  </HeaderWrapper>
)

export default Header
