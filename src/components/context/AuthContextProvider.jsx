import { createContext, useState } from "react";

export const authContext = createContext();
function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const handleSignIn = () => {
    setAuth(!auth);
  };

  const values = { auth, handleSignIn };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
}

export default AuthContextProvider;
