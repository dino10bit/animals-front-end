import { useQuery } from '@apollo/client'
import { ME_QUERY } from '../gql'
import { Me } from '../gql/__generated__/Me'

export const useMe = () => useQuery<Me>(ME_QUERY)
