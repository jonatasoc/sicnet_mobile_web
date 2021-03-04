import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Android from './pages/Android';
import Ios from './pages/iOS';
import Upload from './pages/Upload';

const Routers: React.FC = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/android" component={Android} />
    <Route path="/ios" component={Ios} />
    <Route path="/upload" component={Upload} />
  </Router>
);

export default Routers;
