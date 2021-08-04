import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const user = useSelector(state => state.current.currentUser);

    return (
        <Route {...rest} render={props => (
            user && restricted ?
                <Redirect to="/profile"/>
                : <Component {...props} />
        )}/>
    );
};

export default PublicRoute;