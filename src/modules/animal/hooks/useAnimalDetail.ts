import { useQuery } from '@apollo/react-hooks'
import {
  AnimalDetail,
  AnimalDetailVariables,
} from '../gql/__generated__/AnimalDetail'
import { ANIMAL_DETAIL_QUERY } from '../gql'

export const useAnimalDetail = ({ animalId }: { animalId: number }) =>
  useQuery<AnimalDetail, AnimalDetailVariables>(ANIMAL_DETAIL_QUERY, {
    variables: { id: animalId },
  })
