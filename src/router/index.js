/*
 * @Author: ajie 
 * @Date: 2019-05-27 15:25:35 
 * @Last Modified by: ajie
 * @Last Modified time: 2019-05-28 15:24:52
 */
import React, { lazy } from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const LoginComponent = lazy(() => import('@/pages/Login'));
const LayoutComponent = lazy(() => import('@/pages'));

const PrivateRoute = ({ component: Component, ...args }) => (
  <Route 
    {...args}
    render = {(props) => <Component {...props}/>}
  />
)


export default class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <PrivateRoute component={LayoutComponent} />
        </Switch>
      </Router>
    )
  }
}