import React from "react";
import TodoList from "../components/TodoList";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogOut";

const TodoListPage = () => {
  return (
    <div>
      <h2>Todo List Page</h2>
      <TodoList />
    </div>
  );
};

export default TodoListPage;
