import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
    const user = useSelector(state => state.current.currentUser);

    return (

        <Route {...rest} render={props => (
            user ?
                <Component {...props} />
                : <Redirect to="/login"/>
        )}/>
    );
};

export default PrivateRoute;