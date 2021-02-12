import { combineReducers } from 'redux'
import namesReducer from './features/names/namesReducer.js'

const rootReducer = combineReducers({
  names: namesReducer,
})

export default rootReducer
