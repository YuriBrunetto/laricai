import React from 'react'
import PropTypes from 'prop-types'

import Categories from '../Categories'
import { HeaderWrapper } from './styles'

const HeaderEstablishment = ({ categories, title, address }) => (
  <HeaderWrapper>
    <div id="header-content" className="common-limiter">
      <Categories categories={categories} />
      <h1>{title}</h1>
      <a
        href="https://goo.gl/maps/LM4K3mYAPcZggTNy8"
        title={`Localização de ${title}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {address}
      </a>
    </div>
  </HeaderWrapper>
)

HeaderEstablishment.propTypes = {
  categories: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
}

export default HeaderEstablishment
