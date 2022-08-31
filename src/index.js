import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import ReactRouter from './Routers/router';
import './index.css';


ReactDOM.render(
    <Router>
        <ReactRouter/>
    </Router>,
    document.getElementById('root')
);