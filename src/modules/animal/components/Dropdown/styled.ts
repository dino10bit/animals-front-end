import styled from 'styled-components'
import { colors } from './theme'

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px
`

export const Label = styled.label`
  margin-bottom: 8px;
  color: ${colors.theme.yellow};
  font-weight: bold;
  text-transform: uppercase;
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 200px;
  padding: 4px;
  border: 2px solid ${colors.theme.blue};
`

export const List = styled.ul`
  list-style: none;
  margin: 16px auto;
  padding: 0;
  z-index: 10;
  position: absolute;
`

export const ListItem = styled.li`
  width: 200px;
  padding: 8px;
  background: ${colors.theme.blue};
  border-radius: 4px;
  color: ${colors.theme.yellow};
  text-transform: uppercase;
  &:hover {
    background: ${colors.theme.yellow};
    color: ${colors.theme.blue};
    cursor: pointer;
  }
  & + & {
    margin-top: 4px;
  }
`
