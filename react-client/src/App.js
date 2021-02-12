import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import 'materialize-css'
import { Navbar, Icon } from 'react-materialize'
import routes from './routes.js'
import { Redirect, useLocation } from 'react-router-dom'

import { Provider } from 'react-redux'
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
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
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
