import React from 'react';
import {Route} from 'react-router-dom';
import Footer from "../Components/shared/Footer";
import Project from "../Components/project/Project";
import Login from "../Components/login/Login";
import UserRouter from "./UserRouter";

const ReactRouter = () => {
    return (
        <>
            <Route exact path='/dashboard' component={Login}/>
            <UserRouter path='/new-project' component={Project}/>
            <Footer/>
        </>
    )
}

export default ReactRouter