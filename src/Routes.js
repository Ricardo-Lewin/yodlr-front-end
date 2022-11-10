import React from 'react';
import {Route, Switch} from "react-router-dom"
import UserRegisterForm from "./users/UserRegisterForm";
import UserList from "./users/UsersList";
import UserPage from './users/UserPage';
import NotFound from './NotFound';

function Routes() {
    return (
        <Switch>
            <Route exact path = "/users/new">
                <UserRegisterForm/>
            </Route>
            <Route exact path = "/users/:id">
                <UserPage/>
            </Route>
            <Route exact path = "/admin">
                <UserList/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    );
  }

export default Routes;