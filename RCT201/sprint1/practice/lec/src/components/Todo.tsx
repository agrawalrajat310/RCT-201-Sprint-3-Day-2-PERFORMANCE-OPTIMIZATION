import React, { useEffect, useState } from "react";
import { getData, postTodos, deleteTodos, editTodos } from "./APiCall";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export enum TodoStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface TodoType {
  id: number;
  date?: string;
  text: string;
  status: TodoStatus;
}
const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleGetTodos = () => {
    getData().then((res) => setTodos(res));
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  var date = new Date();
	var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();

  const handleAdd = (text: string) => {
    const todoItem: TodoType = {
        id: Date.now(),
        date: current_date,
     text: text,
      status: TodoStatus.PENDING,
    };
    // setTodos([...todos, todoItem]);

    postTodos(todoItem).then((res) => handleGetTodos());
  };



const handleDelete=(id: number)=>{
  deleteTodos(id).then((res)=> handleGetTodos())

}

const handleEdit=(id: number)=>{
  // let updatedTodo=todos.map((todo)=>{
  //   if(todo.id===id){
  //     if(todo.status==="PENDING"){
  //       return todo.status=TodoStatus.IN_PROGRESS
  //     }
  //     if(todo.status==="IN_PROGRESS"){
  //       return todo.status=TodoStatus.DONE
  //     }
  //   }
  // })
  // editTodos(updatedTodo)
// editTodos(id).then((res)=> handleGetTodos())
}
//   console.log(todos);
  return (
    <div>
      <div>
        <TodoInput handleAdd={handleAdd} />
      </div>
      <div>
        <TodoList data={todos} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </div>
    </div>
  );
};

export default Todo;
