import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=10`
    );
    return response.data;
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (value, { dispatch }) => {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/todos`,
      {
        body: {
          title: value,
          completed: false,
          userId: 1,
          id: new Date().toISOString(),
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log(response.data);
    dispatch(addTodo(response.data.body));
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleleTodoAsync",
  async (id, { dispatch }) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    dispatch(deleteTodo({ id }));
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async (id, { dispatch }) => {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    dispatch(toggleTodo({ id }));
  }
);

export const aboutSlices = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo(state, action) {
      state.list.push(action.payload);
    },
    deleteTodo(state, action) {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo(state, action) {
      const change = state.list.find((todo) => todo.id === action.payload.id);
      change.completed = !change.completed;
    },
  },

  extraReducers: (build) => {
    build.addCase(getTodosAsync.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { addTodo, deleteTodo, toggleTodo } = aboutSlices.actions;
export default aboutSlices.reducer;
