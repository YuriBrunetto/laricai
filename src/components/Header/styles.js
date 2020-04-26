import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  padding: 40px 0 32px;
  border-bottom: 1px solid #eee;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet);
    position: absolute;
    top: 0;
    left: 0;
  }

  h2 {
    font-size: 16px;
    margin-top: 16px;
    font-weight: normal;
  }
`