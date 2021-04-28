import { Switch, Route, Link } from 'react-router-dom'
import { Navbar, Icon } from 'react-materialize'
import { Redirect, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'materialize-css'
import routes from './routes.js'
import store from './store.js'

export default function App() {
  const location = useLocation()

  return (
    <div>
      <Navbar
        className='blue darken-2'
        alignLinks='right'
        brand={
          <a className='brand-logo' href='/table'>
            Names
          </a>
        }
        centerChildren
        id='mobile-nav'
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: () => 0,
          onCloseStart: () => 0,
          onOpenEnd: () => 0,
          onOpenStart: () => 0,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <Link to='/table'>Table</Link>
        <Link to='/info'>Info</Link>
      </Navbar>

      <Provider store={store}>
        <Switch>
          {routes.map((route) =>
            location.pathname == '/' ? (
              <Redirect to='/table' />
            ) : (
              <Route path={route.path} key={route.path}>
                <route.component />
              </Route>
            )
          )}
        </Switch>
      </Provider>
    </div>
  )
}
