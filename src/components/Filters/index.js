import React from 'react'

import Category from '../Category'
import { FiltersWrapper, LinksWrapper } from './styles'

import categories from './data.json'

function Filters() {
  return (
    <FiltersWrapper>
      <div className="common-limiter">
        <h3>Filtre pela categoria:</h3>

        <LinksWrapper>
          {categories.map(({ title, emoji }, i) => (
            <Category key={i} title={title} emoji={emoji} />
          ))}
          {categories.map(({ title, emoji }, i) => (
            <Category key={i} title={title} emoji={emoji} />
          ))}
        </LinksWrapper>
      </div>
    </FiltersWrapper>
  )
}

export default Filters
