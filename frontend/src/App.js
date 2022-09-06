import { Routes, Route } from "react-router-dom";

import { Container, ThemeProvider } from "@mui/material";

import { UserProvider } from "./contexts/userContext";
import { theme } from "./MUI/theme";

import Home from "./pages/home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import AppHeader from "./components/AppHeader";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <UserProvider>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </UserProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
