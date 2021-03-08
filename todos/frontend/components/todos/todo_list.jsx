import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form"

export default class TodoList extends React.Component {
    render () {
      const elements = this.props.todos.map((todo, idx) => {
        return(
          <TodoListItem todo={todo} key={idx}  receiveTodo={this.props.receiveTodo} removeTodo={this.props.removeTodo} />
        )
      })

      return (
        <div className="todolist-div">
          <ul>
            {elements}
          </ul>
          <TodoForm receiveTodo={this.props.receiveTodo} />
        </div>
      )
    }
}