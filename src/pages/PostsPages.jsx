import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//extra-reducers
import { getPostsAsync } from "../store/slices/postsSlices";
import { NavLink } from "react-router-dom";

const PostsPages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <div>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
          </li>
        );
      })}
    </div>
  );
};

export default PostsPages;
