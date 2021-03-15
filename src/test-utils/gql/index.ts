import {
  CREATE_ANIMAL_MUTATION,
  DELETE_ANIMAL_MUTATION,
  LIST_ANIMALS_QUERY,
  ANIMAL_DETAIL_QUERY,
  UPDATE_ANIMAL_MUTATION,
} from 'modules/animal/gql'
import {
  CHANGE_PASSWORD_MUTATION,
  FORGOT_PASSWORD_MUTATION,
  LOGIN_MUTATION,
  ME_QUERY,
  REGISTER_MUTATION,
} from '../../modules/auth/gql'
import {
  MockAnimalType,
  MockAnimalWithUserType,
  MockUserType,
  MockUserWithAnimals,
} from '../generators'

//
// List Animals

export const LIST_ANIMALS_ERROR_MESSAGE = 'list Animals failed'

export const mockListAnimalsSuccess = (data: MockAnimalType[]) => ({
  request: {
    query: LIST_ANIMALS_QUERY,
  },
  result: {
    data: {
      listAnimals: data,
    },
  },
})

export const mockListAnimalsError = {
  request: {
    query: LIST_ANIMALS_QUERY,
  },
  error: new Error(LIST_ANIMALS_ERROR_MESSAGE),
}

//
// Animal Detail

export const ANIMAL_DETAIL_ERROR_MESSAGE = 'Animal detail failed'

export const mockAnimalDetailSuccess = (data: MockAnimalWithUserType) => ({
  request: {
    query: ANIMAL_DETAIL_QUERY,
    variables: {
      id: data.id,
    },
  },
  result: {
    data: {
      animalDetail: data,
    },
  },
})

export const mockAnimalDetailError = (id = 1) => ({
  request: {
    query: ANIMAL_DETAIL_QUERY,
    variables: {
      id,
    },
  },
  error: new Error(ANIMAL_DETAIL_ERROR_MESSAGE),
})

//
// Me

export const ME_ERROR_MESSAGE = 'me failed'

export const mockMeSuccess = (data: MockUserType | MockUserWithAnimals) => ({
  request: {
    query: ME_QUERY,
  },
  result: {
    data: {
      me: {
        animals: [] as MockAnimalType[],
        ...data,
      },
    },
  },
})

export const mockMeError = () => ({
  request: {
    query: ME_QUERY,
  },
  error: new Error(ME_ERROR_MESSAGE),
})

//
// Delete Post

export const mockDeleteAnimalSuccess = (data: MockAnimalType) => ({
  request: {
    query: DELETE_ANIMAL_MUTATION,
    variables: {
      id: data.id,
    },
  },
  result: {
    data: {
      deleteAnimal: data,
    },
  },
})

//
// Log In

export const mockLoginSuccess = (
  data: MockUserType | MockUserWithAnimals,
  accessToken = 'randomToken',
  refreshToken = 'randomToken'
) => ({
  request: {
    query: LOGIN_MUTATION,
    variables: {
      email: data.email,
      password: data.password,
    },
  },
  result: {
    data: {
      login: {
        accessToken,
        refreshToken,
      },
    },
  },
})

//
// Register

export const mockRegisterSuccess = (
  data: MockUserType | MockUserWithAnimals,
  accessToken = 'randomToken',
  refreshToken = 'randomToken'
) => ({
  request: {
    query: REGISTER_MUTATION,
    variables: {
      data: {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      },
    },
  },
  result: {
    data: {
      register: {
        accessToken,
        refreshToken,
      },
    },
  },
})

//
// Create Animal

export const mockCreateAnimalSuccess = (animal: MockAnimalWithUserType) => ({
  request: {
    query: CREATE_ANIMAL_MUTATION,
    variables: {
      data: {
        name: animal.name,
        species: animal.species,
      },
    },
  },
  result: {
    data: {
      createAnimal: {
        id: animal.id,
        name: animal.name,
        species: animal.species,
        user: {
          animals: [] as MockAnimalType[],
          ...animal.user,
        },
      },
    },
  },
})

//
// Edit Animal

export const mockUpdateAnimalSuccess = (animal: MockAnimalWithUserType) => ({
  request: {
    query: UPDATE_ANIMAL_MUTATION,
    variables: {
      data: {
        id: animal.id,
        name: animal.name,
        species: animal.species,
      },
    },
  },
  result: {
    data: {
      updateAnimal: {
        id: animal.id,
        name: animal.name,
        species: animal.species,
        user: {
          animals: [] as MockAnimalType[],
          ...animal.user,
        },
      },
    },
  },
})

//
// Mock Password Forgot

export const mockPasswordForgotSuccess = (email: string) => ({
  request: {
    query: FORGOT_PASSWORD_MUTATION,
    variables: {
      email,
    },
  },
  result: {
    data: {
      forgotPassword: true,
    },
  },
})

//
// Mock Password Change

export const mockPasswordChangeSuccess = (
  data: { password: string; token: string },
  accessToken = 'mock-token',
  refreshToken = 'mock-refresh-token'
) => ({
  request: {
    query: CHANGE_PASSWORD_MUTATION,
    variables: {
      data: {
        password: data.password,
        token: data.token,
      },
    },
  },
  result: {
    data: {
      changePassword: {
        accessToken,
        refreshToken,
      },
    },
  },
})
