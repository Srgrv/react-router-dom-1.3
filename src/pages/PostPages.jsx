import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//extra-reducers
import { getPostAsync } from "../store/slices/postSlices";

const PostPages = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostAsync(id));
  }, [dispatch, id]);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
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
