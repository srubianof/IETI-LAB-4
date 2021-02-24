import React, {useState} from "react";
import './App.css';
import {Login, NewTask, PrivateRoute, SideBar} from "./components";
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
                <Redirect from='/' to='/login'/>
                <Switch>
                    <Route exact path="/login"
                           component={() => <Login setUserLogged={setUserLogged}/>}/>
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
