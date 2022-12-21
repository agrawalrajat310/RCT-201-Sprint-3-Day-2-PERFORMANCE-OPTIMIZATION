import { createContext, useState } from "react";

export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const initState = {
    isAuth: false,
    token: null,
  };
  const [authState, setAuthState] = useState(initState);

  const loginUser = (token) => {
    setAuthState({ isAuth: true, token: token });
  };

  const logoutUser = () => {
    setAuthState(initState);
  };
  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
