import React from 'react'

import Button from './Button'
import { FilterWrapper, ButtonsWrapper } from './styles'

import categories from './data.json'

function Filter() {
  return (
    <FilterWrapper>
      <div className="common-limiter">
        <h3>Filtre pela categoria:</h3>

        <ButtonsWrapper>
          {categories.map(({ title, emoji }, i) => <Button key={i} title={title} emoji={emoji} />)}
        </ButtonsWrapper>
      </div>
    </FilterWrapper>
  )
}

export default Filter