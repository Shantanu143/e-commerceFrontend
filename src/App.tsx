import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/user/Authentication";
import Home from "./pages/user/Home";
import VendarDashboard from "./pages/vender/VendarDashboard";

const App = () => {
  return (
    <>
      <div className="dar">
        <Routes>
          {/* user routes */}
          <Route path="/*" element={<Home />} />

          {/* authantication routes */}
          <Route path="/auth/*" element={<Authentication />} />

          {/* vender Routes */}
          <Route path="/vender/*" element={<VendarDashboard />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
