import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import ProductAll from "./components/ProductAll";
import ProductDetail from "./components/ProductDetail";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [authenticate, setAuthenticaste] = useState(false);
  return (
    <div className="App">
      <NavBar authenticate={authenticate} setAuthenticaste={setAuthenticaste} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login />}
          setAuthenticaste={setAuthenticaste}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail />}
          setAuthenticaste={setAuthenticaste}
        />
      </Routes>
    </div>
  );
}

export default App;
