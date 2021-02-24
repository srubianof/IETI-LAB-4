import React from 'react';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {useStyles} from './useStyles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {TaskPlanner} from "../TaskPlanner";
import {useHistory} from "react-router";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export function SideBar({userLogged, setUserLogged}) {
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Task planner
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>

                <List>

                    <ListItem>
                        <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                        <ListItemText primary={userLogged.user}/>
                    </ListItem>
                </List>
                <Divider/>
                <div className={classes.bottomPush}>
                    <List>
                        {
                            localStorage.getItem("logged")
                                ? <ListItem button onClick={() => {
                                    localStorage.setItem('logged', false)
                                    setUserLogged({
                                        user: '',
                                        password: ''
                                    })
                                    history.push('/login')
                                }
                                }>
                                    <ListItemIcon>
                                        <ExitToAppIcon/>
                                    </ListItemIcon>

                                </ListItem>
                                : <></>
                        }
                    </List>
                </div>


            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <TaskPlanner/>
            </main>
        </div>
    );
}
