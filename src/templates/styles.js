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

export const FloatingContact = styled.aside`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,.3);
  z-index: 12;
  padding: 16px;
  animation: slideUp .5s forwards .3s;
  transform: translateY(100%);

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }


  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
  }

  a {
    flex: 1;
    height: 48px;
    font-weight: bold;
    color: #111;
    background-color: #eee;
    border-radius: 6px;
    text-decoration: none;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    max-width: calc(50% - 8px);

    &.whatsapp {
      background-color: #25D366;
      color: #fff;
    }
  }
`