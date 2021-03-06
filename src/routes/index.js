import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard/Dashboard';

export default () => (
  <Switch>
    <Route path='/' exact component={SignIn} />
    <Route path='/dashboard' component={Dashboard} isPrivate />
    <Route component={SignIn} />
  </Switch>
);
