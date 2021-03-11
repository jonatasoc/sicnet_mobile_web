import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Android from '../pages/Android';
import IOs from '../pages/iOS';
import Upload from '../pages/Upload';
import Login from '../pages/Login';

const Routers: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/android" component={Android} />
      <Route path="/ios" component={IOs} />
      <Route path="/login" component={Login} />
      <Route path="/upload" component={Upload} isPrivate />
    </Switch>
  </Router>
);

export default Routers;
