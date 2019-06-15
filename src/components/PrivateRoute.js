import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const PrivateRoute = ({ component: Component, ...restOfProps }) => {
    const secret = 'What a secret!';
    return (
        <Route 
            {...restOfProps}
            render={() => {
                if(localStorage.getItem('token')) {
                    const token = localStorage.getItem('token');
                    jwt.verify(token, secret, (err, decodedToken) => {
                       return err ? <Redirect to="/login" /> : <Component />
                    })
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
    )
}

export default PrivateRoute;
