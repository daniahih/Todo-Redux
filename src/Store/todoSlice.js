import { createSlice } from "@reduxjs/toolkit";
// i want the data from teh local storage // get item // and i need the data in json , if theres no data return []
const loadFromLocalStorage = () => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const saveToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//create slice by generating the reducer and action creators based on case reducers
const todoSlice = createSlice({
  name: "todo",
  initialState: loadFromLocalStorage(),
  reducers: {
    //reducer: input: curr state, action => output: new state accourding to the action
    addTodo: (state, action) => {
      state.push(action.payload); //state is the stored todos
      saveToLocalStorage(state);
    },
    updateTodo: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        saveToLocalStorage(state);
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const updatedTodos = state.filter((todo) => todo.id !== id);
      saveToLocalStorage(updatedTodos);
      return updatedTodos;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
