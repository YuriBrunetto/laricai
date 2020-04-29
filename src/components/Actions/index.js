import React from 'react'

import { ActionsWrapper, ActionsAnchor } from './styles'

const Actions = () => (
  <ActionsWrapper>
    <ActionsAnchor
      href="https://api.whatsapp.com/send?phone=5551999999999&text=sua%20mensagem"
      title="Mandar mensagem no WhatsApp para o estabelecimento"
      target="_blank"
    >
      WhatsApp
    </ActionsAnchor>

    <ActionsAnchor
      href="tel:5551999999999"
      title="Ligar para o estabelecimento"
    >
      Ligar
    </ActionsAnchor>
  </ActionsWrapper>
)

export default Actions
