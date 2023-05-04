import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <span>{todo.title}</span>
    </div>
  );
};

export default TodoItem;
