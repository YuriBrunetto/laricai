import React from 'react'
import PropTypes from 'prop-types'

import { SectionWrapper } from './styles'

const Section = ({ title, children }) => (
  <SectionWrapper className="common-limiter small">
    {title && <h2>{title}</h2>}

    <div className="wrapper">{children}</div>
  </SectionWrapper>
)

Section.defaultProps = {
  title: '',
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Section
