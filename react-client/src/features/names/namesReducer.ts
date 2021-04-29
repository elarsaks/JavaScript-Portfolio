const initialState: NameState = {
  error: null,
  status: 'idle',
  names: [],
}

export default function namesReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'names/error': {
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
        error: null,
        names: action.payload,
        status: 'idle',
      }
    }
    default:
      return state
  }
}
