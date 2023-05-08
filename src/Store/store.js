import { configureStore } from "@reduxjs/toolkit";
import { todoImgApi } from "../api/apiSlice";
import todoReducer from "./todoSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    [todoImgApi.reducerPath]: todoImgApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoImgApi.middleware),
});
