
import types from './types';

export function addTodo(payload) {
    return (dispatch) => {
        dispatch({
            type: types.TODO_ADD,
            payload
        })
    }
}

export function tickedTodo(index) {
    return (dispatch) => {
        dispatch({
            type: types.TODO_TICKED_TOGGLE,
            index
        })
    }
}