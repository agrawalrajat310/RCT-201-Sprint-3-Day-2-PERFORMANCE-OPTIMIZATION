import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const { authState } = useContext(AuthContext);

  if (!authState.isAuth) return <Navigate to={"/login"} />;
  return children;
}

export default PrivateRoute;
