import { useEffect, useState } from "react";

import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forgot from "./pages/Forgot";
function App() {
  const [token, setToken] = useState();
  useEffect(() => {
    const storedString = localStorage.getItem("token");
    if (storedString) {
      setToken(storedString);
    }
    console.log(storedString);
  }, []);
  const host = "http://localhost:5000/api/auth";
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login setToken={setToken} host={host} />}
          />
          <Route
            path="/"
            element={
              token ? (
                <Home setToken={setToken} />
              ) : (
                <Login setToken={setToken} host={host} />
              )
            }
          />
          <Route
            path="/signup"
            element={<SignUp setToken={setToken} host={host} />}
          />
          <Route path="/forgot" element={<Forgot host={host} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
