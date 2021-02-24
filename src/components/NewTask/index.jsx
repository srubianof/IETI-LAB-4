import React from 'react';
import {Fab, FormControlLabel, makeStyles, Radio, RadioGroup, TextField} from "@material-ui/core";
import {Main} from "./styles";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import AddIcon from "@material-ui/icons/Add";
import {addTask} from "../../services/getTasks";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export const NewTask = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        task.dueDate = date.toLocaleDateString()
    };


    const task = {
        description: '',
        responsible: {
            name: '',
            email: ''
        },
        status: '',
        dueDate: ''
    }


    return (
        <>
            <Main>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic"
                               label="Descripcion"
                               onChange={(e) => {
                                   task.description = e.target.value
                               }}
                               required/>
                    <Typography>
                        Responsable:
                    </Typography>
                    <TextField id="filled-basic"
                               label="Nombre"
                               variant="filled"
                               onChange={(e) => {
                                   task.responsible.name = e.target.value

                               }}
                               required/>
                    <TextField id="filled-basic"
                               label="Email"
                               variant="filled"
                               onChange={(e) => {
                                   task.responsible.email = e.target.value

                               }}
                               required/>
                    <FormControl component="fieldset">
                        <Typography>
                            Estado:
                        </Typography>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={(e) => {
                            task.status = e.target.value

                        }}>
                            <FormControlLabel value="Ready" control={<Radio/>} label="Listo"/>
                            <FormControlLabel value="In progress" control={<Radio/>} label="En progreso"/>
                            <FormControlLabel value="Done" control={<Radio/>} label="Terminado"/>
                        </RadioGroup>
                    </FormControl>
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

                </form>
            </Main>
            <div style={{float: "right"}}>
                <Fab color="primary" aria-label="add" onClick={() => {
                    addTask(task)
                }}
                     component={Link} to={'/task-planner'}>
                    <AddIcon/>
                </Fab>
            </div>
        </>
    )
};

