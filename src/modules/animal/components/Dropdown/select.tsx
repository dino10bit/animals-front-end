import React, { useEffect, useContext, useState } from 'react'
import Downshift from 'downshift'
import { useQuery } from 'react-apollo'
import { Loader } from 'components/Loader'
import { LIST_SPECIES_QUERY } from 'modules/animal/gql'
import { Search, Label, Input, List, ListItem } from './styled'
import { AnimalContext } from './AnimalsContext'

export const Select = () => {
  const { setSelectedAnimal } = useContext(AnimalContext)
  const { data, loading } = useQuery(LIST_SPECIES_QUERY)
  const [result, setResult] = useState([])

  useEffect(() => {
    if (!data) return
    setResult(data.speciesList)
  }, [data])

  if (loading) return <Loader/>

  return (
    <Downshift
        onChange={setSelectedAnimal}
        itemToString={item => (item ? item.name : '')}
      >
        {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            inputValue,
            isOpen
          }) => (
          <div>
            <Search>
              <Label {...getLabelProps()}>Select a species</Label>
              <Input {...getInputProps()} placeholder="Type to filter" />
            </Search>
            {isOpen && (
            <List {...getMenuProps()}>
              {result
                .filter(item => item.name.startsWith(inputValue))
                .map((item, index) => (
                  <ListItem
                    {...getItemProps({
                      key: item.id,
                      index,
                      item
                    })}
                  >
                    {item.name}
                  </ListItem>
                ))}
            </List>
            )}
          </div>
        )}
      </Downshift>
  )
}
