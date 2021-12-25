import Navbar from "./components/Navbar";
import PrivateRoutes from "./components/routes/PrivateRoutes";
import PublicRoutes from "./components/routes/PublicRoutes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <PublicRoutes />
      <PrivateRoutes />
    </div>
  );
}
