import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserProfile from '../views/UserProfile/UserProfile';
import Dashboard from '../views/Dashboard/Dashboard';
// import PrivateRoute from '../routing/PrivateRoute'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path = '/admin/dashboard' component = { UserProfile } />
        <Route exact path = '/admin/user' component = { Dashboard } />
        </Switch>
    </div>
  )
}

export default Routes
