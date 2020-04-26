import React from 'react'

import Category from '../Category'
import { CategoriesWrapper, LinksWrapper } from './styles'

import categories from './data.json'

function Categories() {
  return (
    <CategoriesWrapper>
      <div className="common-limiter">
        <h3>Filtre pela categoria:</h3>

        <LinksWrapper>
          {categories.map(({ title, emoji }, i) => <Category key={i} title={title} emoji={emoji} />)}
        </LinksWrapper>
      </div>
    </CategoriesWrapper>
  )
}

export default Categories