const initialState = {
  error: 'null',
  status: 'idle',
  test: '',
  names: [],
}

export default function namesReducer(state = initialState, action) {
  switch (action.type) {
    case 'names/error': {
      const error = action.payload
      return {
        ...state,
        error: action.payload,
      }
    }
    case 'names/namesLoading': {
      return {
        ...state,
        status: 'loading',
      }
    }
    case 'names/namesLoaded': {
      return {
        ...state,
        status: 'idle',
        names: action.payload,
      }
    }
    default:
      return state
  }
}
