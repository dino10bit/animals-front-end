import Downshift from 'downshift'
import React from 'react'
import { ApolloConsumer } from 'react-apollo'

interface IOptionType {
  id?: number
  species?: string
}

interface IAnimalSelectComponentProps {
  options: IOptionType[]
  loading: boolean
  data?: {
    animalSearchBySpecies: {
      id: string
      name: string
      species: string
      uri: string
    }[]
  }
  handleChange: (e: any, x: { name; value }) => void
}

export const Dropdown: React.FC<IAnimalSelectComponentProps> = ({ options, loading, data, handleChange }) => {
  return (
    <Downshift id="search" itemToString={animal => (animal === null ? '' : animal.species)}>
      {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem
        }) => (
        <div>
          <ApolloConsumer>
            {client => (
              <input
                type="text"
                {...getInputProps({
                  type: 'search',
                  placeholder: 'Search for species',
                  id: 'species',
                  className: 'loading',
                  onChange: e => {
                    e.persist()
                    handleChange(e, client)
                  }
                })}
              />
            )}
          </ApolloConsumer>
          {isOpen && (
            <div className="dropdown">
              {options
                .filter(item => !inputValue || item.species.includes(inputValue))
                .map((animal, index) => (
                <div
                  key={animal.id}
                  className="dropdown-item"
                  {...getItemProps({
                    key: animal.id,
                    index,
                    item: animal,
                    style: {
                      color: 'black',
                      backgroundColor:
                        highlightedIndex === index ? 'lightgray' : 'white',
                      fontWeight: selectedItem === animal ? 'bold' : 'normal'
                    }
                  })}
                >
                  {animal.species}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </Downshift>
  )
}
