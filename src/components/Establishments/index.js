import React from 'react'
import PropTypes from 'prop-types'

import Establishment from '../Establishment'
import { EstablishmentsWrapper, EstablishmentsList } from './styles'

const Establishments = ({ city }) => (
  <EstablishmentsWrapper>
    <div className="common-limiter">
      <h4 className="city">{city}</h4>

      <EstablishmentsList>
        <Establishment />
        <Establishment />
        <Establishment />
        <Establishment />
        <Establishment />
        <Establishment />
        <Establishment />
        <Establishment />
        <Establishment />
        <Establishment />
      </EstablishmentsList>
    </div>
  </EstablishmentsWrapper>
)

Establishments.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Establishments
