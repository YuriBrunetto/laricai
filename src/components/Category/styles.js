import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledCategory = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  text-decoration: none;
  margin: 0 16px;
  flex-shrink: 0;

  @media (max-width: 959px) {
    margin: 0 8px;
  }

  @media (min-width: 960px) {
    &:hover {
      .icon {
        border-width: 2px;
        border-color: #333;
        transform: rotate(1turn);
      }
    }
  }

  .icon {
    width: 60px;
    height: 60px;
    border: 1px solid #eee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: 0.3s;

    @media (max-width: 959px) {
      width: 40px;
      height: 40px;
      font-size: 14px;
    }
  }

  .label {
    margin-top: 4px;
    font-size: 13px;

    @media (max-width: 959px) {
      font-size: 12px;
    }
  }
`
