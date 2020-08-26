import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Android from './pages/Android';
import Ios from './pages/iOS';

function Routers() {
    return(
        <Router>
            <Route path="/" exact component={Home}></Route>
            <Route path="/android" component={Android}></Route>
            <Route path="/ios" component={Ios}></Route>
        </Router>
    )
}

export default Routers;