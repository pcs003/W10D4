import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root";
import configureStore from './store/store';
import {
    receiveTodos,
    receiveTodo,
    removeTodo,
} from './actions/todo_actions';
import {
    receiveSteps,
    receiveStep,
    removeStep,
} from './actions/step_actions';
import {allTodos} from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    const root = document.getElementById("root");
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;
    window.allTodos = allTodos;
    ReactDOM.render(<Root store={store} />, root)
})