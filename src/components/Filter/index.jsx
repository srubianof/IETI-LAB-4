import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {makeStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import {FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Filter() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDateChange = (date) => {
        console.log(date.toLocaleDateString())
    };

    const useStyles = makeStyles((theme) => ({
        typography: {
            padding: theme.spacing(2),
        },
    }));

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePoper = () => {
        setAnchorEl(null);
    };

    const openPoper = Boolean(anchorEl);
    const [value, setValue] = React.useState('');
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Filter
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                fullWidth
            >
                <DialogTitle id="alert-dialog-slide-title">{"Filter tasks"}</DialogTitle>
                <DialogContent>
                    <div style={{marginLeft: '30%', width: 'auto'}}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={new Date()}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div style={{marginLeft: '30%', width: 'auto'}}>
                        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                            Responsable
                        </Button>
                        <Popover
                            id={id}
                            open={openPoper}
                            anchorEl={anchorEl}
                            onClose={handleClosePoper}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <TextField id="standard-basic"
                                       label="Responsable"
                                       onChange={(e) => {
                                           console.log(e.target.value)
                                       }}
                                       required/>
                        </Popover>
                    </div>
                    <div style={{marginLeft: '30%', width: 'auto'}}>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={(e) => {
                                console.log(e.target.value)

                            }}>
                                <FormControlLabel value="Ready" control={<Radio/>} label="Listo"/>
                                <FormControlLabel value="In progress" control={<Radio/>} label="En progreso"/>
                                <FormControlLabel value="Done" control={<Radio/>} label="Terminado"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Clear All
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
