import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './index.css'
import {useHistory} from "react-router";
import {getUsers} from "./getUsers";
import {Link} from "react-router-dom";


export const SignIn = ({setUserLogged}) => {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        const users = getUsers();
        if (users.some(({user: userItem, password: passwdItem}) => userItem === user && passwdItem === password)) {
            localStorage.setItem("user", user);
            localStorage.setItem("password", password);
            localStorage.setItem("userCreds", JSON.stringify({user, password}))
            localStorage.setItem("logged", true);
            setUserLogged({user, password})
            history.push('/task-planner')
        }

    }

    return (
        <>
            <main className="layout">
                <Paper className="paper">
                    <Avatar className="avatar">
                        <LockIcon/>
                    </Avatar>
                    <Typography variant="h2">Sign in</Typography>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input
                            id="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => {
                                setUser(e.target.value)
                            }}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </FormControl>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit"
                        onClick={handleSubmit}
                    >
                        Sign in
                    </Button>
                    <Link to='/signup'>
                        Don't have an account signup!
                    </Link>
                </Paper>
            </main>
        </>
    );
}
