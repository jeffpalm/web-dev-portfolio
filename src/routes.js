import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import Portfolio from './components/Portfolio/Portfolio'
import Portfolio from './components/Portfolio/Portfolio'

export default (
  <Switch>
    <Route exact path='/' component={Portfolio} />
  </Switch>
)