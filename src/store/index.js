import reducer from "../reducers";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const devTools = process.env.NODE_ENV === 'development' ?
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null
const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        devTools
    )
);
export default store;