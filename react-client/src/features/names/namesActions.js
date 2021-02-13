import names from '../../api/names.js'

export const namesLoading = () => ({ type: 'names/namesLoading' })
export const namesLoaded = (names) => ({
  type: 'names/namesLoaded',
  payload: names,
})

export const setError = (error) => ({
  type: 'names/error',
  payload: error.message,
})

// Thunk function
export const fetchNames = (params) => (dispatch) => {
  dispatch(namesLoading())
  names
    .getNames(params)
    .then((response) => dispatch(namesLoaded(response.data)))
    .catch((err) => dispatch(setError(err)))
}
