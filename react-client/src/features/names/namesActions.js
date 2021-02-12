import names from '../../api/names.js'

export const namesLoading = () => ({ type: 'names/namesLoading' })
export const namesLoaded = (names) => ({
  type: 'todos/todosLoaded',
  payload: names,
})

export const setError = (error) => ({
  type: 'names/error',
  payload: error.message,
})

// Thunk function
export const fetchNames = (params) => async (dispatch) => {
  dispatch(namesLoading())
  names.getNames(params).then((resp) => dispatch(namesLoaded(resp.data)))
}
