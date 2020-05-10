import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Actions from '../Actions'
import Image from '../Image'
import Categories from '../Categories'
import { EstablishmentWrapper } from './styles'

const Establishment = ({
  title,
  address,
  phone,
  whatsapp,
  categories,
  city,
  slug,
}) => (
  <EstablishmentWrapper>
    <Categories categories={categories} />

    <Link to={slug} title={title} className="image">
      <Image />
    </Link>

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
  slug: PropTypes.string.isRequired,
}

export default Establishment
