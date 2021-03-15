export const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
}

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SEARCH_ANIMALS_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null
      }
    case 'SEARCH_ANIMALS_SUCCESS':
      return {
        ...state,
        loading: false,
        animals: action.payload
      }
    case 'SEARCH_ANIMALS_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      }
    default:
      return state
  }
}
