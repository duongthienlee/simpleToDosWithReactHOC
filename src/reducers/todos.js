import types from "actions/types";
import update from 'immutability-helper';

const initialState = {
    todosArr: [{
        name: 'Go To Metro Station',
        time: new Date(),
        done: true
    },
    {
        name: 'Study Programming at School',
        time: new Date(),
        done: false
    }]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TODO_ADD:
            return update(state, {
                todosArr: { $push: [action.payload] }
            })

        case types.TODO_TICKED_TOGGLE:
            return update(state, {
                todosArr: { [action.index]: { done: { $set: !state.todosArr[action.index].done } } }
            })

        default:
            return state;
    }
};

export default todoReducer;