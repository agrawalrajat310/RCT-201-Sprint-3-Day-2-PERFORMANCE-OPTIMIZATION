import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodosData,
  editTodosData,
  getTodosData,
  postTodosData,
} from "../redux/todos/action";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);


  const [text, setText] = useState([]);
  const [edit, setEdit] = useState({});

  useEffect(() => {
    dispatch(getTodosData());
  }, []);

  const handleClick = () => {
    dispatch(postTodosData(text));
  };

  const handlechage = (e) => {
    const inp = e.target.name;
    setText({
      ...text,
      [inp]: e.target.value,
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteTodosData(id));
  };
  const handleEdit = (payload) => {
    setEdit(payload.id);
  };
  const handleEditClick = (it) => {
    dispatch(editTodosData({ it, text }));
    // console.log(text);
    setEdit("");
  };

  const handleEditinp = (e) => {
    const inp = e.target.name;
    setText({
      ...text,
      [inp]: e.target.value,
    });
  };

  if (error) {
    return <h1>Error Occured somehing happend...</h1>;
  }
  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>TODO App</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handlechage}
      />
      <label>Status: </label>
      <select name="status" onChange={handlechage}>
        <option value={true}>True</option>
        <option value={false}>False</option>
      </select>
      <button onClick={handleClick}>Add</button>

      {loading ? (
        <h1>Loading....</h1>
      ) : (
        todos &&
        todos.map((it) => (
          <div
            key={it.id}
            style={{
              background: "lightGreen",
              width: "300px",
              margin: "auto",
              marginBottom: "20px",
            }}>
            {edit !== it.id ? (
              <h3>{it.name}</h3>
            ) : (
              <input
                type="text"
                name="name"
                placeholder="edit here.."
                value={text.name}
                onChange={handleEditinp}
              />
            )}
            <p>Done : {it.status}</p>
            {edit !== it.id ? (
              <div>
                <button onClick={() => handleDelete(it.id)}>Delete</button>
                <button onClick={() => handleEdit(it)}>Edit</button>
              </div>
            ) : (
              <button onClick={() => handleEditClick(it)}>EDIT</button>
            )}
          </div>
        ))
      )}

<button >Add</button>


    </div>
  );
};

export default Todos;
