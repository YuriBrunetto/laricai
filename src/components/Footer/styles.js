import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  text-align: center;
  padding: 24px 32px 20px;
  position: relative;
  font-size: 14px;
  color: #666;

  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.1s;
    display: inline-block;
    padding: 2px;

    &:hover {
      background: cyan;
    }
  }

  &:after {
    content: '';
    width: 100%;
    height: 4px;
    background: var(--rainbow);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
