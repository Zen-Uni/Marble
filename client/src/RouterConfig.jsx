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
  Main,
  WelcomePage,
  Tech,
  Project,
  User,
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
                <Route path="/main">
                    <Main>
                        <Route path="/main" exact>
                            <WelcomePage/>
                        </Route>
                        <Route path="/main/project" exact>
                            <Project/>
                        </Route>
                        <Route path="/main/user" exact>
                            <User/>
                        </Route>
                        <Route path="/main/tech" exact>
                            <Tech/>
                        </Route>
                    </Main>
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