import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LogIn from './pages/LogIn'
import Home from './pages/Home'
import Counter from './pages/Counter'

const Router = () => (
  <BrowserRouter basename={'/typescript-template'}>
    <Switch>
      <Route exact path="/">
        <LogIn />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router
