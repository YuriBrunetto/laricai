import styled from 'styled-components'

export const EstablishmentWrapper = styled.div`
  flex: 0 0 calc(33.33% - 64px);
  margin: 0 32px 48px;

  @media (max-width: 959px) {
    flex-basis: calc(100% - 64px);
    margin: 0 32px 32px;
  }

  .image {
    display: block;
    margin-top: 8px;
    border: 2px solid #eee;
    font-size: 0;
    border-radius: 8px;
    overflow: hidden;
    position: relative;

    &:hover .gatsby-image-wrapper {
      transform: scale(1.1);
    }

    .gatsby-image-wrapper {
      transition: 0.3s;
    }
  }

  .title {
    font-size: 32px;
    margin-top: 8px;
    font-weight: bold;

    @media (max-width: 959px) {
      font-size: 20px;
    }
  }

  .description {
    color: rgba(0, 0, 0, 0.8);

    @media (max-width: 959px) {
      font-size: 14px;
    }
  }
`
