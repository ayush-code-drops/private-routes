import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";

function PrivateRoutes() {
  return (
    <div>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/dashboard/settings">
        <Settings />
      </Route>
    </div>
  );
}

export default PrivateRoutes;
