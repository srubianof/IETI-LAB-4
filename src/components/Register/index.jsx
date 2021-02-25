import React from 'react';
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

export const SignUp = () => {
return (<>
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
                        console.log(e.target.value)
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
                        console.log(e.target.value)
                    }}
                />
            </FormControl>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
            >
                Sign up
            </Button>
        </Paper>
    </main>
</>);
}
