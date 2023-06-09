import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostsAsync = createAsyncThunk("posts", async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return response.data;
});

const postsSlices = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  extraReducers: (build) => {
    build.addCase(getPostsAsync.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postsSlices.reducer;
