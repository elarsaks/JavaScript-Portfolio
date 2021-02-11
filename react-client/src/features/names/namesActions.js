import names from '../../repository/names'

export const GET_NAMES = 'GET_NAMES'

export const getNames = (params) => {
  // Handle API request here
  const payload = names.getNames(params)

  return {
    type: 'GET_NAMES',
    payload,
  }
}
