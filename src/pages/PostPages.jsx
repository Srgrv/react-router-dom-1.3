import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//extra-reducers
import { getPostAsync } from "../store/slices/postSlices";

const PostPages = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostAsync(id));
  }, [dispatch, id]);

  return (
    <div>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostPages;
