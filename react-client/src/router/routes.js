import Table from './components/Table'
import ReverseTable from './components/ReverseTable'
//import { Redirect } from 'react-router-dom'

export default [
  /*
  {
    path: '/',
    component: () => <Redirect push to='/table' />,
  },*/
  {
    path: '/table',
    component: Table,
  },
  {
    path: '/reverse-table',
    component: ReverseTable,
  },
]
