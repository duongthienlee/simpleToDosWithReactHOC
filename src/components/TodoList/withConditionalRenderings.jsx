import React from 'react';
import { compose } from 'recompose';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

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
export const withConditionalRenderings = compose(
    withLoadingIndicator,
    withTodosNull,
    withTodosEmpty
);
