import React from 'react'
import PropTypes from 'prop-types'

import { handleCategoryEmoji } from '../../utils'

const Categories = ({ categories }) => (
  <div className="categories">
    {categories.map((category, i) => (
      <span key={i} role="img" aria-label={category}>
        {handleCategoryEmoji(category)}
      </span>
    ))}
  </div>
)

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default Categories
