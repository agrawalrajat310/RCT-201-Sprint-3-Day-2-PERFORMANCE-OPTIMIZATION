import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Home = () => {
  const { state } = useContext(AppContext);
  return (
    <div>
      <h1>Home</h1>
      <h3>Token : {state.auth}</h3>
    </div>
  );
};

export default Home;