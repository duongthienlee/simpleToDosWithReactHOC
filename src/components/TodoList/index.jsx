import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withConditionalRenderings } from './withConditionalRenderings'
import {
    List, ListItem, ListItemIcon,
    ListItemText, ListItemSecondaryAction,
    Checkbox, IconButton
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { tickedTodo } from 'actions/todo'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles(theme => ({
    todosList: {
        width: '100%',
        maxWidth: 400,
        maxHeight: '300px',
        overflow: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
}));


const TodoList = ({ todos }) => {
    const classes = useStyles();
    const dispatch = useDispatch();


    const handleToggle = (e, index) => {
        e.preventDefault()
        dispatch(tickedTodo(index))
    };

    return (
        <List className={classes.todosList}>
            {todos.map((todo, index) => {
                const labelId = `checkbox-list-label-${todo.name}`;
                return (
                    <ListItem key={index} role={undefined} dense button onClick={(e) => handleToggle(e, index)}>
                        <ListItemIcon>
                            <Checkbox
                                color="primary"
                                edge="start"
                                checked={todo.done}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={todo.name} secondary={todo.time.toString()} />
                        <ListItemSecondaryAction>
                            <IconButton size="small" edge="end" aria-label="crud">
                                <MoreHorizIcon style={{ width: 32, height: 32 }} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    )
}
export default withConditionalRenderings(TodoList);
