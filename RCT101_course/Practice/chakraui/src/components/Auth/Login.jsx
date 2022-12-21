import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.form`
  /* border: 1px solid black; */
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  margin: auto;
  gap: 30px;

  input {
    height: 45px;
  }
`;

const Login = () => {
  const [userData, setUserData] = useState({});
  const { state, loginUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    loginUser(userData, navigate);
    e.target.reset();
  };

  return (
    <Wrapper onSubmit={hanldeSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <input type="submit" disabled={state.loading} />
    </Wrapper>
  );
};

export default Login;
