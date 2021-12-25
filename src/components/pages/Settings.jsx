import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { authContext } from "../context/AuthContextProvider";

function Settings() {
  const { auth } = useContext(authContext);
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return <div>Settings Page</div>;
}

export default Settings;
