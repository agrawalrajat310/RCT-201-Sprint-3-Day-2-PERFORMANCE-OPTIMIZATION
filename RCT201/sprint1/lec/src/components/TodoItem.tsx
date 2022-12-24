import React from "react";
import { TodoType } from "./Todo";

type Props = {
  handleDelete: (id: number) => void;
  handleEdit: (id: number)=>void;
  todo: TodoType;
};
const TodoItem = (props: Props) => {
  return (
    <div>
      <h1>{props.todo.text}</h1>
   

      <button onClick={() => props.handleEdit(props.todo.id)}>{props.todo.status}</button>
      <button onClick={() => props.handleDelete(props.todo.id)}>
        Delete- {props.todo.date}
      </button>
    </div>
  );
};

export default TodoItem;
