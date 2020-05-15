import styled from 'styled-components'

export const ContactLinkWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 8px;
  }

  a {
    color: rgba(17, 17, 17, 0.8);
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
  }
`
