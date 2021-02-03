/**
 * @description the router config of app
 * @author Uni
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// import components
import {
  Login,
  Register,
  NotFound,
  Main
} from './components'
import { useAuth } from './hooks';


function RouterConfig() {

    const auth = useAuth()

    return (
        <Router>
            <Switch>
                <Route path="/register" exact>
                    <Register/>
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route path="/main" exact>
                    <Main/>
                </Route>
                <Route path="/" exact>
                    {
                        auth.auth ? <Redirect to="main"/> : <Redirect to="login"/> 
                    }
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    )
}

export default RouterConfig