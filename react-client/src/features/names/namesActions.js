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
export const fetchNames = (params) => async (dispatch) => {
  dispatch(namesLoading())
  const response = await names.getNames(params)
  dispatch(namesLoaded(response.data))
}
