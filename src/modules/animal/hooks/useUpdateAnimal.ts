import { useMutation } from '@apollo/react-hooks'
import {
  UpdateAnimal,
  UpdateAnimalVariables,
} from '../gql/__generated__/UpdateAnimal'
import { UPDATE_ANIMAL_MUTATION } from '../gql'

export const useUpdateAnimal = () =>
  useMutation<UpdateAnimal, UpdateAnimalVariables>(UPDATE_ANIMAL_MUTATION)
