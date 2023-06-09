import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

//extra-reducers
import { addTodoAsync } from "../store/slices/aboutSlices";

const Field = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTodoAsync(data.addTask));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            placeholder="write a task"
            {...register("addTask", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 3,
                message: "Количество символов должно быть не менее 3",
              },
            })}
          />
          <input type="submit" value="add" />
        </label>
        <div>
          {errors?.addTask && <p>{errors?.addTask?.message || "Err"}</p>}
        </div>
      </form>
    </div>
  );
};

export default Field;
