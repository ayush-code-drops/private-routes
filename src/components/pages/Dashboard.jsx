import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { authContext } from "../context/AuthContextProvider";

function Dashboard() {
  const { auth } = useContext(authContext);
  if (!auth) {
    return <Redirect to="/login" />;
  }
  return <div>Dashboard Page</div>;
}

export default Dashboard;
