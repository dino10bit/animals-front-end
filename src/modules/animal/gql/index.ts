import gql from 'graphql-tag'

export const SEARCH_ANIMALS_BY_SPECIES_QUERY = gql`
  query AnimalSearchBySpecies($species: String!) {
    animalSearchBySpecies(species: $species) {
      id
      name
      species
      uri
    }
  }
`

export const LIST_SPECIES_QUERY = gql`
  query {
    speciesList {
      id
      name
    }
  }
`

export const LIST_ANIMALS_QUERY = gql`
  query ListAnimals {
    listAnimals {
      id
      name
      species
      uri
    }
  }
`

export const ANIMAL_DETAIL_QUERY = gql`
  query AnimalDetail($id: Float!) {
    animalDetail(id: $id) {
      id
      name
      species
      uri
      user {
        id
        email
        animals {
          id
          name
          species
          uri
        }
      }
    }
  }
`

export const CREATE_ANIMAL_MUTATION = gql`
  mutation CreateAnimal($data: CreateAnimalInput!) {
    createAnimal(data: $data) {
      id
      name
      species
      uri
    }
  }
`

export const UPDATE_ANIMAL_MUTATION = gql`
  mutation UpdateAnimal($data: UpdateAnimalInput!) {
    updateAnimal(data: $data) {
      id
      name
      species
      uri
    }
  }
`

export const DELETE_ANIMAL_MUTATION = gql`
  mutation DeleteAnimal($id: Float!) {
    deleteAnimal(id: $id) {
      id
      name
      species
      uri
    }
  }
`
