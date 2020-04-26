import React from 'react'

import { EstablishmentWrapper } from './styles'

const Establishment = () => (
  <EstablishmentWrapper>
    <span role="img" className="emojis" aria-label="Categorias">🍺🍔🍕🌭🥗</span>
    <div className="image">
      <img src="/images/lamb.jpg" alt="Lamb Brewpub" />
    </div>

    <div className="title">Lamb Brewpub</div>
    <div className="description">
      Rua Frei Caneca, 1029 - Centro<br />
      (51) 3637 3001
    </div>
  </EstablishmentWrapper>
)

export default Establishment