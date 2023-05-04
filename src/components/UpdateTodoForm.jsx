import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../Store/todoSlice";

const UpdateTodoForm = ({ todoId }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(updateTodo({ id: todoId, title }));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new title"
      />
      <button type="submit">Update Todo</button>
    </form>
  );
};

export default UpdateTodoForm;
