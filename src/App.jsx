import React from "react";
import { Route, Routes } from "react-router";
import AuthLayout from "./layouts/auth/index";
import LoginPage from "./pages/auth/login/index";
import RegisterPage from "./pages/auth/register";
import TemplatePage from "./pages/TemplatePage";

const App = () => {
  return (
    <div>
      <Routes>
        {/* template routes */}
        <Route path="/" element={<TemplatePage />} />
        {/* auth routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
