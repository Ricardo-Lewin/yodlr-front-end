import {Route, Switch} from "react-router-dom"
import UserRegisterForm from "./users/UserRegisterForm";

function Routes() {
    return (
        <Switch>
            <Route exact path = "/users/new">
                <UserRegisterForm/>
            </Route>
            <Route exact path = "/users/:id"> <UserDetail users={users}/></Route>
            <Route exact path = "/admin"> <Admin getUsers={getUsers} users={users}/></Route>
        </Switch>
    );
  }

export default Routes;