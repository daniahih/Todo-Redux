import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoListPage from "./Pages/TodoListPage";
import AddTodoPage from "./Pages/AddTodoPage";
import EditTodoPage from "./Pages/EditTodoPage";
const Router = createBrowserRouter([
  { path: "/", element: <TodoListPage /> },
  {
    path: "/add",
    element: <AddTodoPage />,
  },
  {
    path: "/edit/:id",
    element: <EditTodoPage />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
