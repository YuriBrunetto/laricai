import React from 'react'
import PropTypes from 'prop-types'

import { StyledCategory } from './styles'

const Category = ({ title, emoji }) => (
  <StyledCategory to="/" title={title}>
    <span role="img" aria-label={title} className="icon">{emoji}</span>
    <div className="label">{title}</div>
  </StyledCategory>
)

Category.propTypes = {
  title: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
}

export default Category