import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LogIn from './pages/LogIn'
import Home from './pages/Home'

const Router = () => (
  <BrowserRouter basename={'/typescript-template'}>
    <Switch>
      <Route exact path="/">
        <LogIn />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router
