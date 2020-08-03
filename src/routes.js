import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import Portfolio from './components/Portfolio/Portfolio'
// import Portfolio from './components/Portfolio/Portfolio'
import Home from './components/Home/Home'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
  </Switch>
)