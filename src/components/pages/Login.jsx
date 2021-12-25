import { useContext } from "react";
import { authContext } from "../context/AuthContextProvider";

function Login() {
  const { auth, handleSignIn } = useContext(authContext);
  return (
    <div>
      Login Page
      <button onClick={handleSignIn}>{auth ? "Sign Out" : "Sign In"}</button>
    </div>
  );
}

export default Login;
