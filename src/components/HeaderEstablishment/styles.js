import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  height: 45vh;
  min-height: 300px;
  background: url(/images/lamb.jpg) no-repeat center #333;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  padding-bottom: 24px;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(17, 17, 17, 0.9) 20%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  #header-content {
    position: relative;
    z-index: 5;

    .categories {
      display: flex;
      justify-content: center;

      span {
        margin: 0 4px;
        font-size: 24px;
      }
    }

    h1 {
      color: #fff;
      font-size: 48px;
    }

    a {
      color: rgba(255, 255, 255, 0.7);
      margin: 4px 0 0 0;
      text-decoration: none;
      padding: 2px;
      font-size: 14px;
      font-weight: bold;

      &:hover {
        color: #111;
        background-color: cyan;
      }
    }
  }
`
