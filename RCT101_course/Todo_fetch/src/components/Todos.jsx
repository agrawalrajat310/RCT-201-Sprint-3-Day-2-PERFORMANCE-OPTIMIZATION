import TodoBody from "./TodoBody";
import { useState, useEffect } from "react";

export default function Todos() {
  const [Todos, setTodos] = useState([]);
  const [AddTodo, setAddTodo] = useState({
    title: "",
    status: false
  });

  function getResponses() {
    fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((res) => setTodos(res))
      .catch((er) => console.log(er));
  }

  function DeleteResponse(id) {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    })
      .then((res) => res.json())
      .then((res) => getResponses())
      .catch((er) => console.log(er));
  }
  function handelChange(e) {
    setAddTodo({
      ...AddTodo,
      [e.target.name]: e.target.value
    });
  }
  // console.log(Todos)
  function AddTask() {
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(AddTodo)
    })
      .then((res) => res.json())
      .then((res) => getResponses())
      .catch((er) => console.log(er));
  }
  const ChangeTask = (id) => {
    const updatedTodos = Todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(updatedTodos);
    // setTodos(Todos)
  };

  useEffect(() => {
    getResponses();
  }, []);

  return (
    <>
      <h1>Todos</h1>
      <div>
        <input
          name="title"
          type="text"
          placeholder="Enter Task"
          value={AddTodo.name}
          onChange={handelChange}
        />
        <br />
        <button onClick={AddTask}>Add Task</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Toggle</th>
            </tr>
          </thead>
          {Todos.map((el) => (
            <TodoBody
              DeleteTask={() => DeleteResponse(el.id)}
              ChangeTask={() => ChangeTask(el.id)}
              key={el.id}
              Task={el.title}
              Status={el.status === false ? "Incomplete" : "Complete"}
            />
          ))}
        </table>
      </div>
    </>
  );
}
