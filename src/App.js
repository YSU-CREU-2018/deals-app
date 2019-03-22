import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './login';
import Forgot from './forgot';
import Dashboard from './dashboard';
import Register from './register';
import resetSuccess from './resetSuccess';
import Regsuccess from './regsuccess';
import Profile from './profile';
import Deals from './deals';

class App extends Component {
    render() {
        return (
            <div className="App">
            <Route path="/login" component={Login} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/resetSuccess" component={resetSuccess} />
            <Route path="/register" component={Register} />
            <Route path="/regsuccess" component={Regsuccess} />
            <Route path="/profile" component={Profile} />
            <Route path="/deals" component={Deals} />
            </div>
        );
    }
}

export default App;
