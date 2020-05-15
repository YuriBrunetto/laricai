import styled from 'styled-components'

export const SectionWrapper = styled.section`
  padding-top: 40px;

  @media (max-width: 959px) {
    padding-top: 24px;

    h2 {
      font-size: 20px;
    }
  }

  &:last-child {
    padding-bottom: 40px;

    @media (max-width: 959px) {
      padding-bottom: 32px;
    }
  }

  .wrapper {
    margin-top: 16px;

    @media (max-width: 959px) {
      margin-top: 8px;
    }
  }
`
