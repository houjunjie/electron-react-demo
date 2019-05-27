import React,{ lazy } from 'react'
import{ HashRouter as Router, Route, Switch } from 'react-router-dom'

const HomeComponent = lazy(() => import('./Home'))

const Layout = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path='/' component={HomeComponent} />
      </Switch>
    </Router>
  )
}

export default Layout