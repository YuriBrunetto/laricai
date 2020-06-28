import React from 'react'

import { FooterWrapper } from './styles'

const Footer = () => (
  <FooterWrapper>
    &copy; {new Date().getFullYear()} &mdash; desenvolvido com ❤️ por
    <br />
    <a
      href="https://twitter.com/piguearthur"
      title="Seguir @piguearthur no Twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      arthur freiberger
    </a>{' '}
    e{' '}
    <a
      href="https://twitter.com/brun3tto"
      title="Seguir @brun3tto no Twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      yuri brunetto
    </a>
  </FooterWrapper>
)

export default Footer
