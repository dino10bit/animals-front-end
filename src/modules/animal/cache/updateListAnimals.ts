import { DataProxy } from 'apollo-cache'
import { LIST_ANIMALS_QUERY } from '../gql'
import { ListAnimals } from '../gql/__generated__/ListAnimals'

export const updateListAnimals = <T>(
  queryName: string,
  callBack: (
    listAnimals: ListAnimals['listAnimals'],
    result: T
  ) => ListAnimals['listAnimals']
) => (cache: DataProxy, params: any) => {
  const result = params.data[queryName]

  const { listAnimals } = cache.readQuery<ListAnimals>({
    query: LIST_ANIMALS_QUERY,
  })
  cache.writeQuery({
    query: LIST_ANIMALS_QUERY,
    data: { listAnimals: callBack(listAnimals, result) },
  })
}
