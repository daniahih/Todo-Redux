import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../Store/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      dispatch({ type: "todo/addTodo", payload: JSON.parse(storedTodos) });
    }
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
