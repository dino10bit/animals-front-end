import { useMutation } from '@apollo/client'
import { updateListAnimals } from '../cache/updateListAnimals'
import { CREATE_ANIMAL_MUTATION } from '../gql'
import {
  CreateAnimal,
  CreateAnimal_createAnimal,
  CreateAnimalVariables,
} from '../gql/__generated__/CreateAnimal'

export const useCreateAnimal = () =>
  useMutation<CreateAnimal, CreateAnimalVariables>(CREATE_ANIMAL_MUTATION, {
    update: updateListAnimals<CreateAnimal_createAnimal>(
      'createAnimal',
      (listAnimals, createAnimal) => listAnimals.concat([createAnimal])
    ),
  })
