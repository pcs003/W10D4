import React from "react";
import TodoListContainer from "./todos/todo_list_container";

export default class App extends React.Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return (
      <div className="app">
        <h1>Portly</h1>
        <TodoListContainer />
      </div>
    )
  }
}