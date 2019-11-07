import React from "react";
import ReactDOM from "react-dom";
import "style/main.scss";
import App from "./App";
import { Provider } from "react-redux"
import store from "./store"
import { HashRouter, Route } from "react-router-dom"
import { theme } from './theme'
import { ThemeProvider } from '@material-ui/core/styles';

const ToDoApp = () =>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>

ReactDOM.render(<HashRouter><Route exact path="/" component={ToDoApp} /></HashRouter>, document.getElementById("app"));
