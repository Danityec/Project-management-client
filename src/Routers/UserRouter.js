import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const UserRouter = ({component: Component, ...rest}) => {

    return (
        <Route {...rest} render={props => (
            cookies.user ? <Component {...props} /> : <Redirect to="/"/>
        )}/>
    )
}

export default UserRouter