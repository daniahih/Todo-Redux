import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Store/todoSlice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); //[{}]
    if (title.trim()) {
      dispatch(addTodo({ id: Date.now(), title })); // type of action //
      setTitle(""); // return the title input clear
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
