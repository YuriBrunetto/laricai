import React from 'react'

import Establishment from '../Establishment'
import { EstablishmentsWrapper, EstablishmentsList } from './styles'

const Establishments = () => (
  <EstablishmentsWrapper>
    <div className="common-limiter">
      <h4 className="city">Feliz - RS</h4>

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

export default Establishments