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
import {addUser} from "../Login/getUsers";

export const SignUp = ({setUserLogged}) => {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = () => {
        if (password === password2) {
            addUser({user, password})
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
                    <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Type again the password</InputLabel>
                    <Input
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => {
                            setPassword2(e.target.value)
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
                </Paper>
            </main>
        </>
    );
}
