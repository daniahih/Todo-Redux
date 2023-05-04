import React from "react";
import { useParams } from "react-router-dom";
import TodoForm from "../components/TodoForm";

const EditTodoPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Edit Todo Page</h2>
      <TodoForm todoId={id} />
    </div>
  );
};

export default EditTodoPage;
