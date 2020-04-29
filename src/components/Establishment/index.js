import React from 'react'
import PropTypes from 'prop-types'

import Actions from '../Actions'
import Image from '../Image'
import { EstablishmentWrapper } from './styles'

const handleCategoryEmoji = category => {
  switch (category) {
    case 'beer':
      return '🍺'
    case 'burger':
      return '🍔'
    case 'pizza':
      return '🍕'
    case 'vegetarian':
      return '🥗'
    case 'hot-dog':
      return '🌭'
    default:
      return null
  }
}

const Establishment = ({
  title,
  address,
  phone,
  whatsapp,
  categories,
  city,
}) => (
  <EstablishmentWrapper>
    <span role="img" className="emojis" aria-label="Categorias">
      {categories.map(category => handleCategoryEmoji(category))}
    </span>
    <div className="image">
      <Image />
    </div>

    <div className="title">{title}</div>
    <div className="description">
      {address}
      <br />
      {phone}
    </div>

    <Actions title={title} phone={phone} whatsapp={whatsapp} />
  </EstablishmentWrapper>
)

Establishment.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  whatsapp: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
}

export default Establishment
