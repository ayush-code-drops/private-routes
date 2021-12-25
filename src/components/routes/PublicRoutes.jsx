import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

function PublicRoutes() {
  return (
    <div>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default PublicRoutes;
