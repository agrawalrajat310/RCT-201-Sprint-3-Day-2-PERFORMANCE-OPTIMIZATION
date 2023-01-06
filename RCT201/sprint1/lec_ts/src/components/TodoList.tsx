import React from "react";
import { TodoType } from "./Todo";
import TodoItem from "./TodoItem";

type TodoListProps = {
  handleDelete: (id: number) => void;
  handleEdit: (id: number)=>void;
  data: TodoType[];
};
const TodoList = (props: TodoListProps) => {
  // console.log(props)
  return (
    <div>
      {props.data.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleDelete={props.handleDelete} handleEdit={props.handleEdit} />
      ))}
    </div>
  );
};

export default TodoList;
