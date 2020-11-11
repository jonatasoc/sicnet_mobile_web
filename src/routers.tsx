import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Android from './pages/Android';
import Ios from './pages/iOS';
import Upload from './pages/Upload';
import Header from './components/Header';
import Footer from './components/Footer';

const Routers: React.FC = () => (
  <Router>
    <Header />
    <Route path="/" exact component={Home} />
    <Route path="/android" component={Android} />
    <Route path="/ios" component={Ios} />
    <Route path="/upload" component={Upload} />
    <Footer />
  </Router>
);

export default Routers;
