import { useMutation } from '@apollo/react-hooks'
import {
  CreateAnimal,
  CreateAnimal_createAnimal,
  CreateAnimalVariables,
} from '../gql/__generated__/CreateAnimal'
import { CREATE_ANIMAL_MUTATION } from '../gql'
import { updateListAnimals } from '../cache/updateListAnimals'

export const useCreateAnimal = () =>
  useMutation<CreateAnimal, CreateAnimalVariables>(CREATE_ANIMAL_MUTATION, {
    update: updateListAnimals<CreateAnimal_createAnimal>(
      'createAnimal',
      (listAnimals, createAnimal) => listAnimals.concat([createAnimal])
    ),
  })
