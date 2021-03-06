import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Router>
        <ScrollToTop>
            <CssBaseline />
            <App />
        </ScrollToTop>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
