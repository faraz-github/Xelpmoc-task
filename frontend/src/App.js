import { Routes, Route } from "react-router-dom";

import { UserProvider } from "./contexts/userContext";

import Home from "./pages/home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
