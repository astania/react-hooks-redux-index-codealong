import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo"

function TodoContainer() {

  const todos = useSelector(state => state.todos.entities)

  console.log(todos)

  const todoList = todos.map((todo, index) => <Todo key={index} text={todo} />)
  return <div>
    {todoList}

  </div>;
}

export default TodoContainer;
