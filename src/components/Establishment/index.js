import React from 'react'

import Actions from '../Actions'
import Image from '../Image'
import { EstablishmentWrapper } from './styles'

const Establishment = () => (
  <EstablishmentWrapper>
    <span role="img" className="emojis" aria-label="Categorias">
      🍺🍔🍕🌭🥗
    </span>
    <div className="image">
      <Image />
    </div>

    <div className="title">Lamb Brewpub</div>
    <div className="description">
      Rua Frei Caneca, 1029 - Centro
      <br />
      (51) 3637 3001
    </div>

    <Actions />
  </EstablishmentWrapper>
)

export default Establishment
