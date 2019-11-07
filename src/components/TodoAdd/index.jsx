import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux'
import { addTodo } from 'actions/todo'
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => ({
    inputContainer: {
        maxWidth: 400,
        marginTop: 50,
        padding: 20,
        marginBottom: 50,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    inputFieldsContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        flex: 1,
        color: theme.palette.secondary.contrastText
    },
    datePicker: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        flex: 1,
        color: theme.palette.secondary.contrastText
    },
    addBtn: {
        display: 'block',
        marginLeft: 'auto',
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));

const TodoAdd = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('Type here')
    const [selectedDate, handleDateChange] = useState(new Date());

    function handleSubmit() {
        let todoObj = { name: todo, time: selectedDate, done: false }
        dispatch(addTodo(todoObj))
    }

    function handleChange(e) {
        e.preventDefault();
        setTodo(e.target.value)
    }
    console.log("selectedDate", selectedDate.toString())
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Paper className={classes.inputContainer}>
                <Paper elevation={0} className={classes.inputFieldsContainer}>
                    <TextField
                        error={false}
                        id="filled-error"
                        label="Todo"
                        value={todo}
                        onChange={(e) => handleChange(e)}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <KeyboardDateTimePicker
                        className={classes.datePicker}
                        label="DateTimePicker"
                        inputVariant="outlined"
                        value={selectedDate}
                        onChange={handleDateChange}
                        onError={console.log}
                        minDate={new Date("2018-01-01T00:00")}
                        format="yyyy/MM/dd hh:mm a"
                        margin="normal"
                    />
                </Paper>
                <Button className={classes.addBtn} variant="contained" color="primary" onClick={() => handleSubmit()} >Add</Button>
            </Paper>



        </MuiPickersUtilsProvider >
    )
}
export default TodoAdd;