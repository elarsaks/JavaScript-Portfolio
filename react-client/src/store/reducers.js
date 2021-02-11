import {
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DESC,
  SORT_BY_AMOUNT_ASC,
  SORT_BY_AMOUNT_DESC,
} from './actions.js'

const initialState = {
  names: [],
  extraData: 'Just to have some other state!',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SORT_BY_NAME_ASC:
      return {
        ...state,
        names: action.payload,
      }
    case SORT_BY_NAME_DESC:
      return {
        ...state,
        names: action.payload,
      }
    case SORT_BY_AMOUNT_ASC:
      return {
        ...state,
        names: action.payload,
      }
    case SORT_BY_AMOUNT_DESC:
      return {
        ...state,
        names: action.payload,
      }
    default:
      return state
  }
}

export default reducer
