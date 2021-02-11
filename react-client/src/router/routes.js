import Table from '../pages/table/Table.js'
//import Info from '../pages/info/Info.js'
import { Redirect } from 'react-router-dom'

function Info() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Not a TABLE!</h1>
      <h4>
        This is jus a placeholder component, to prove that I can use router.
      </h4>
    </div>
  )
}
export default [
  /*
  {
    path: '/',
    component: () => <Redirect push to='/table' />,
  }, */
  {
    path: '/table',
    component: Table,
  },
  {
    path: '/info',
    component: Info,
  },
]
