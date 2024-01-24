import { Routes, Route } from "react-router-dom";

import { Login } from "../pages/Login";
import { Welcome } from "../pages/Welcome";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="welcome" element={<Welcome />} />
    </Routes>
  )
}

