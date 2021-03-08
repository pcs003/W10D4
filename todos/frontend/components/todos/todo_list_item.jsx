import React from "react";

export default class TodoListItem extends React.Component {
    constructor(props) {
      super(props);
      this.deleteTodo = this.deleteTodo.bind(this)
    }

    deleteTodo(e) {
      e.preventDefault();
      this.props.removeTodo(this.props.todo)
    }

    changeDone(e) {
      e.preventDefault();
      // this.props.receiveTodo();
    }

    render () {
      return (
        <li>
          {this.props.todo.title}
          <button onClick={this.deleteTodo}>Frag</button>
        </li>
      )
    }
}