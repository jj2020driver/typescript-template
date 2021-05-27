import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter basename={'/typescript-template'}>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
