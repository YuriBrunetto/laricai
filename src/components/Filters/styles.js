import styled from 'styled-components'

export const FiltersWrapper = styled.section`
  padding: 32px 0;
  border-bottom: 1px solid #eee;

  @media (max-width: 959px) {
    padding: 16px 0;
  }

  h3 {
    text-align: center;
    margin-bottom: 16px;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 959px) {
    justify-content: flex-start;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
`
