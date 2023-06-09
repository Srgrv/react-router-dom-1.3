import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

//extra-reducers
import { getTodosAsync } from "../store/slices/aboutSlices";

//components
import Todo from "./Todo";

const List = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const list = useSelector((state) => state.about.list);

  return (
    <div>
      {list.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
};

export default List;
