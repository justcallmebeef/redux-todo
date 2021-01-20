import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import * as actions from "./store/todos/actions";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const initialState = [];
const store = configureStore(initialState);

store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch(actions.addTodo("Finish Redux Todos"));
store.dispatch(actions.addTodo("Add More Todos"));
store.dispatch(actions.addTodo("Todos are fun!"));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
