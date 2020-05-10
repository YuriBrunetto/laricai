import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  height: 50vh;
  background: url(/images/lamb.jpg) no-repeat center #333;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  #header-content {
    position: relative;
    z-index: 5;

    h1 {
      color: #fff;
      font-size: 64px;
    }
  }
`
