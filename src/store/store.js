import { configureStore } from "@reduxjs/toolkit";

//slices
import postsSlices from "./slices/postsSlices";
import aboutSlices from "./slices/aboutSlices";
import postSlices from "./slices/postSlices";

const store = configureStore({
  reducer: {
    posts: postsSlices,
    post: postSlices,
    about: aboutSlices,
  },
});

export default store;
