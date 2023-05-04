import React from "react";
import { useParams } from "react-router-dom";
import UpdateTodoForm from "../components/UpdateTodoForm";

const EditTodoPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Edit Todo Page</h2>
      <UpdateTodoForm todoId={id} />
    </div>
  );
};

export default EditTodoPage;
