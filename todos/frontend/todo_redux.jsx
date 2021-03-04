import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {
    receiveTodos,
    receiveTodo,
} from './actions/todo_actions';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    const root = document.getElementById("root");
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    ReactDOM.render(<h1>Portly</h1>, root)
})