const initialState = {
  error: 'null',
  status: 'idle',
  names: [
    {
      'name': 'Ville',
      'amount': 24,
    },
    {
      'name': 'Anna',
      'amount': 6,
    },
    {
      'name': 'Antti',
      'amount': 22,
    },
  ],
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
        name: action.payload,
      }
    }
    default:
      return state
  }
}
