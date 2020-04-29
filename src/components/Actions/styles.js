import styled from 'styled-components'

export const ActionsWrapper = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
`

export const ActionsAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  background-color: #eee;
  padding: 8px;
  border-radius: 8px;
  color: #333;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.1s;

  &:hover {
    background-color: #dedede;
  }
`
