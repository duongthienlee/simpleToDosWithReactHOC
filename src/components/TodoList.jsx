import React from 'react';

import { compose } from 'recompose';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    todosList: {
        width: '100%',
        maxWidth: 400,
        maxHeight: '150px',
        overflow: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
}));

// React HOC goes here
const withTodosNull = Component => props =>
    !props.todos ? null : <Component {...props} />

const withTodosEmpty = Component => props =>
    !props.todos.length ?
        <Typography style={{ textAlign: "center" }} color="textSecondary" component="h4" variant="h6">
            You have no todos
        </Typography>
        :
        <Component {...props} />

const withLoadingIndicator = Component => ({ isLoadingTodos, ...others }) =>
    isLoadingTodos ?
        <div style={{ textAlign: "center" }}><CircularProgress color="primary" /></div>
        : <Component {...others} />

// compose to make it readable
const withConditionalRenderings = compose(
    withLoadingIndicator,
    withTodosNull,
    withTodosEmpty
);


const TodoList = ({ todos }) => {
    const classes = useStyles();
    // initialise an array of checked with false values
    const [checkedList, setChecked] = React.useState(Array.from({ length: todos.length }).fill(false));

    const handleToggle = index => () => {
        let checkedListCopy = checkedList.slice()
        checkedListCopy[index] = !checkedListCopy[index]
        setChecked(checkedListCopy);
    };
    return (
        <List className={classes.todosList}>
            {todos.map((value, index) => {
                const labelId = `checkbox-list-label-${value}`;
                return (
                    <ListItem key={index} role={undefined} dense button onClick={handleToggle(index)}>
                        <ListItemIcon>
                            <Checkbox
                                color="primary"
                                edge="start"
                                checked={checkedList[index]}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value} />
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
