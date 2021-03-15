import { useQuery } from '@apollo/client'
import { ANIMAL_DETAIL_QUERY } from '../gql'
import {
  AnimalDetail,
  AnimalDetailVariables,
} from '../gql/__generated__/AnimalDetail'

export const useAnimalDetail = ({ animalId }: { animalId: number }) =>
  useQuery<AnimalDetail, AnimalDetailVariables>(ANIMAL_DETAIL_QUERY, {
    variables: { id: animalId },
  })
