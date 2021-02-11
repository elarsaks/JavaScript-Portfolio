import { configureStore } from '@reduxjs/toolkit'
import namesReducer from './features/names/namesReducer'

export default configureStore({
  reducer: {
    names: namesReducer,
  },
})
