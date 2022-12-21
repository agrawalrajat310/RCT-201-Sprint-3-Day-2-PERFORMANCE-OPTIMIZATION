import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AppContext);

  if (state.auth) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;