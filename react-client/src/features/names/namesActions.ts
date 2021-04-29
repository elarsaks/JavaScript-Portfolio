import names from '../../api/names'

export const namesLoading = () => ({ type: 'names/namesLoading' })
export const namesLoaded = (names: Name[]) => ({
  type: 'names/namesLoaded',
  payload: names,
})

export const setError = (error: Error) => ({
  type: 'names/error',
  payload: error.message,
})

// Thunk function
export const fetchNames = (params: Params) => (dispatch: any) => {
  dispatch(namesLoading())
  names
    .getNames(params)
    .then((response: any) => dispatch(namesLoaded(response.data)))
    .catch((err: Error) => dispatch(setError(err)))
}
