import axios from "axios";

export const getTodos = () => {
  return fetch("http://localhost:8080/todos")
    .then((res) => res.json())
    .then((res) => res)
    .catch((er) => er);
};

export const DeleteTodo = (id) => {
  return axios.delete(`http://localhost:8080/todos/${id}`);
};

export const AddTodoData = (data) => {
  return axios.post("http://localhost:8080/todos", {
    title: data.title,
    status: data.status
  });
};
