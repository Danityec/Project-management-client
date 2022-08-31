import React from 'react';
import './Login.css'
import Header from "../shared/Header";


const Login = (props) => {
    const authenticationSuccess = async (response) => {
        const body = {token: response.tokenId}
        fetch(`https://project/localhost/authLogin`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
            .then(response => response.json())
    }

    const authenticationFailure = (response) => {
        console.log(response);
    }

    return (
        <div className={'login-page'}>
            <Header/>
            <div className={'login-circle'}/>
            <div className={'login-content'}>
                <div className={'login-btn'}>
                    <h1>get productive!</h1>
                        onSuccess={authenticationSuccess}
                        onFailure={authenticationFailure}
                </div>
                <div className={'login-text'}>
                    <p>create and manage your project</p>
                </div>
            </div>
        </div>
    )
}

export default Login