import styled from 'styled-components'

export const EstablishmentWrapper = styled.div`
  flex: 0 0 calc(33.33% - 64px);
  margin: 0 32px 48px;

  .image {
    margin-top: 8px;
    border: 2px solid #eee;
    font-size: 0;
    border-radius: 8px;
    overflow: hidden;
    position: relative;

    &:before {
      content: '';
      display: block;
      padding-bottom: 56.25%;
    }

    img {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .title {
    font-size: 32px;
    margin-top: 8px;
  }
`