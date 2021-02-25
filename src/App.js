import React, {useState} from "react";
import './App.css';
import {NewTask, PrivateRoute, SideBar, SignIn, SignUp} from "./components";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Redirect} from "react-router";
import Filter from "./components/Filter";

function App() {
    const [userLogged, setUserLogged] = useState({
        user: '',
        password: ''
    });
    const [tasks, setTasks] = useState([{
        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "responsible": {
            "name": "Michel",
            "email": "a@a.com"
        },
        "status": "ready",
        "dueDate": "12/23/2020",

    }, {
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "responsible": {
            "name": "Juan",
            "email": "b@b.com"
        },
        "status": "ready",
        "dueDate": "2/3/2021",

    }, {
        "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "responsible": {
            "name": "El pepe",
            "email": "c@c.com"
        },
        "status": "ready",
        "dueDate": "4/27/2020",

    }]);
    console.log(userLogged)
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/"
                           component={() => <SignIn setUserLogged={setUserLogged}/>}/>
                    <Route exact path="/signup"
                           component={() => <SignUp setUserLogged={setUserLogged}/>}/>
                    <PrivateRoute userLogged={userLogged} path="/task-planner"
                                  component={() => <SideBar userLogged={userLogged} setUserLogged={setUserLogged} tasks={tasks} setTasks={setTasks}/>}/>
                    <Route path="/new-task"
                           component={() => <NewTask setTasks={setTasks}/>}/>
                </Switch>

            </Router>

        </>
    );
}

export default App;
