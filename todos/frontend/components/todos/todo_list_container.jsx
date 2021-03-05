import React from "react";
import TodoList from "./todo_list";
import {connect} from "react-redux";
import { allTodos } from "../../reducers/selectors";
import {receiveTodo} from "../../actions/todo_actions";

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
    state // good practice?
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo:(todo) => dispatch(receiveTodo(todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// this is a TodoList element connected to the props above