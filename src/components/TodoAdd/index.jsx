import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: 400,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: theme.palette.secondary.contrastText
    }
}));

const TodoAdd = () => {
    const classes = useStyles();

    const [todo, setTodo] = useState('')

    function handleSubmit() {
        console.log("submit todo", todo)
    }

    function handleChange(e) {
        e.preventDefault();
        setTodo(e.target.value)
    }
    return (
        <Paper className={classes.inputContainer}>
            <InputBase
                className={classes.input}
                placeholder="Add todo"
                inputProps={{ 'aria-label': 'Add todo' }}
                value={todo}
                onChange={(e) => handleChange(e)}
            />
            <Button variant="contained" color="primary" onClick={() => handleSubmit()} >Add</Button>
        </Paper>
    )
}
export default TodoAdd;