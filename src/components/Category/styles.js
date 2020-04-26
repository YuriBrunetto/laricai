import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledCategory = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  text-decoration: none;
  margin: 0 16px;

  &:hover {
    .icon {
      border-width: 2px;
      border-color: #333;
      transform: rotate(1turn);
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
    transition: .3s;
  }

  .label {
    margin-top: 4px;
    font-size: 13px;
  }
`