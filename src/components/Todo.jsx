import React from "react";
import { useDispatch } from "react-redux";

//extra-reducers
import { deleteTodoAsync } from "../store/slices/aboutSlices";
import { toggleTodoAsync } from "../store/slices/aboutSlices";

const Todo = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoAsync(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(deleteTodoAsync(id))}>&times;</span>
    </div>
  );
};

export default Todo;
