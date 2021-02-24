import React from "react"
import {Redirect, Route} from "react-router-dom"

export function PrivateRoute({component: Component, userLogged, ...rest}) {
    console.log(userLogged === '' || userLogged)
    return (
        <Route
            {...rest}
            render={props => {
                return userLogged.user !== '' || !userLogged ? <Component {...props} /> : <Redirect to="/login"/>;
            }}
        />
    )
}
