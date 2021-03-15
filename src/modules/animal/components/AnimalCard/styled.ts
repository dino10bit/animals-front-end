import { Card as AntCard } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const { Meta } = AntCard

export const Card = styled(AntCard)`
  margin-top: 0 !important;

  & + & {
    margin-top: 5px;
  }CardLink
`

export const CardLink = styled(Link)`
  margin-top: 5px;
  display: block;
`
