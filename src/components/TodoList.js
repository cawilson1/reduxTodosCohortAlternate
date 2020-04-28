import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, boundToggleTodo }) => (
  <ul>
    {console.log("todos", todos)}
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => boundToggleTodo(index)} />
    ))}
  </ul>
);

export default TodoList;
