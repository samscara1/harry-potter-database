import React from "react";
import { Route } from 'react-router-dom';

export const CustomRoute = (route) => {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} />
            )}
        />
    );
}
