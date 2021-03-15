import { useMutation } from '@apollo/client'
import { UPDATE_ANIMAL_MUTATION } from '../gql'
import {
  UpdateAnimal,
  UpdateAnimalVariables,
} from '../gql/__generated__/UpdateAnimal'

export const useUpdateAnimal = () =>
  useMutation<UpdateAnimal, UpdateAnimalVariables>(UPDATE_ANIMAL_MUTATION)
