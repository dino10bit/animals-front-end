import { useMutation } from '@apollo/client'
import { REGISTER_MUTATION } from '../gql'
import { Register, RegisterVariables } from '../gql/__generated__/Register'

export const useRegister = () =>
  useMutation<Register, RegisterVariables>(REGISTER_MUTATION)
