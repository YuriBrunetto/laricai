import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --rainbow: linear-gradient(to right, orange , yellow, green, cyan, blue, violet);
  }

  ::selection {
    background-color: #333;
    color: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }

  h1 {
    font-size: 40px;
  }

  strong {
    font-weight: bolder;
  }

  .common-limiter {
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 16px;

    &.small {
      max-width: 960px;
    }
  }
`

export default GlobalStyle
