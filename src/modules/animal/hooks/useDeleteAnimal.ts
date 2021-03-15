import { useMutation } from '@apollo/client'
import { updateListAnimals } from '../cache/updateListAnimals'
import { DELETE_ANIMAL_MUTATION } from '../gql'
import {
  DeleteAnimal,
  DeleteAnimal_deleteAnimal,
  DeleteAnimalVariables,
} from '../gql/__generated__/DeleteAnimal'

export const useDeleteAnimal = () =>
  useMutation<DeleteAnimal, DeleteAnimalVariables>(DELETE_ANIMAL_MUTATION, {
    update: updateListAnimals<DeleteAnimal_deleteAnimal>(
      'deleteAnimal',
      (listAnimals, deleteAnimal) =>
        listAnimals.filter(animal => animal.id !== deleteAnimal.id)
    ),
  })
