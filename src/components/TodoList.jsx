import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../Store/todoSlice";
import { useGetRandomImgQuery } from "../api/apiSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos); // it return the todos slice from state object
  const dispatch = useDispatch();
  const [checkedTodo, setcheckedTodo] = useState([]);
  console.log(checkedTodo);
  const { refetch } = useGetRandomImgQuery();
  const [checkedImg, setCheckedImg] = useState();

  useEffect(() => {
    if (todos.length === 0) {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        dispatch({ type: "todo/addTodo", payload: JSON.parse(storedTodos) });
      }
    }
  }, [dispatch, todos.length]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  function handleCheckboxChange(id) {
    if (checkedTodo.includes(id)) {
      setcheckedTodo(checkedTodo.filter((checkedId) => checkedId !== id));
    } else {
      refetch().then((result) => {
        const updatedData = result.data;
        console.log(updatedData);
        setCheckedImg(updatedData.htmlCode);
        setcheckedTodo([...checkedTodo, id]);
      });
    }
  }
  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={checkedTodo.includes(todo.id)}
            onChange={() => handleCheckboxChange(todo.id)}
          />
          {checkedTodo.includes(todo.id) && (
            <span dangerouslySetInnerHTML={{ __html: checkedImg }}></span>
          )}
          <span>{todo.title}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
