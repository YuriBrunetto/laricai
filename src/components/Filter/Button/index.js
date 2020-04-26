import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from '../styles'

const Button = ({ title, emoji }) => (
  <StyledButton title={title}>
    <div className="icon">{emoji}</div>
    <div className="label">{title}</div>
  </StyledButton>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired
}

export default Button