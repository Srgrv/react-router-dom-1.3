import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostAsync = createAsyncThunk(
  "post/getPostAsync",
  async (id) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  }
);

const postSlices = createSlice({
  name: "post",
  initialState: {
    post: null,
  },
  extraReducers: (build) => {
    build.addCase(getPostAsync.fulfilled, (state, action) => {
      state.post = action.payload;
    });
  },
});

export default postSlices.reducer;
