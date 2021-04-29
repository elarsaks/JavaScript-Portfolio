const initialState = {
  error: null,
  status: 'idle',
  test: '',
  names: [],
}

export default function namesReducer(state = initialState, action) {
  switch (action.type) {
    case 'names/error': {
      return {
        ...state,
        error: action.payload, //Make it error.msg
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
