import React, {useState} from "react";
import './App.css';
import {NewTask, PrivateRoute, SideBar, SignIn, SignUp} from "./components";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Redirect} from "react-router";

function App() {
    const [userLogged, setUserLogged] = useState({
        user: '',
        password: ''
    });
    console.log(userLogged)
    return (
        <>
            <Router>
                <Redirect from='/' to='/signin'/>
                <Switch>
                    <Route exact path="/signin"
                           component={() => <SignIn setUserLogged={setUserLogged}/>}/>
                    <Route exact path="/signup"
                           component={() => <SignUp />}/>
                    <PrivateRoute userLogged={userLogged} path="/task-planner"
                                  component={() => <SideBar userLogged={userLogged} setUserLogged={setUserLogged}/>}/>
                    <Route path="/new-task"
                           component={() => <NewTask/>}/>
                </Switch>

            </Router>
        </>
    );
}

export default App;
