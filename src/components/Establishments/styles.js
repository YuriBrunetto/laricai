import styled from 'styled-components'

export const EstablishmentsWrapper = styled.section`
  padding: 56px 0 0;

  @media (max-width: 959px) {
    padding: 24px 0;
  }

  .city {
    font-size: 32px;

    @media (max-width: 959px) {
      font-size: 24px;
    }
  }
`

export const EstablishmentsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 24px -32px 0;
`
