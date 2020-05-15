import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  padding: 40px 0 32px;
  border-bottom: 1px solid #eee;
  position: relative;

  ${({ internal }) =>
    internal &&
    `
    padding: 16px 0;

    h1 {
      font-size: 32px;
    }
  `}

  @media (max-width: 959px) {
    padding: 24px 0 16px;

    h1 {
      font-size: 24px;
    }
  }

  &:before {
    content: '';
    width: 100%;
    height: 4px;
    background: var(--rainbow);
    position: absolute;
    top: 0;
    left: 0;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  h2 {
    font-size: 16px;
    margin-top: 16px;
    font-weight: normal;

    @media (max-width: 959px) {
      font-size: 14px;
      margin-top: 8px;
    }
  }
`
