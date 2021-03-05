import React from "react";
import TodoListItem from "./todo_list_item";

export default class TodoList extends React.Component {
    render () {
      const elements = this.props.todos.map((todo, idx) => {
        return(
          <TodoListItem todo={todo} key={idx}/>
        )
      })

      return (
        <ul>
          {elements}
        </ul>
      )
    }
}