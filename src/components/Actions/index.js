import React from 'react'
import PropTypes from 'prop-types'

import { ActionsWrapper, ActionsAnchor } from './styles'

const Actions = ({ title, phone, whatsapp }) => (
  <ActionsWrapper>
    <ActionsAnchor
      href={`https://api.whatsapp.com/send?phone=${whatsapp}&text=sua%20mensagem`}
      title={`Mandar mensagem no WhatsApp para ${title}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
    </ActionsAnchor>

    <ActionsAnchor href={`tel:${phone} `} title={`Ligar para ${title}`}>
      Ligar
    </ActionsAnchor>
  </ActionsWrapper>
)

Actions.propTypes = {
  title: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  whatsapp: PropTypes.string.isRequired,
}

export default Actions
