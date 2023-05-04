import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import DeleteTask from "./components/DeleteTask";

const Router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/createtask",
    element: <CreateTask />,
  },
  {
    path: "/edittask/:id",
    element: <EditTask />,
  },
  {
    path: "/deletetask/:id",
    element: <DeleteTask />,
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
