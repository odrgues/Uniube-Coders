import { Routes, Route } from "react-router-dom";
import Home from "../../features/home/pages/Home";
import AboutProject from "../../features/aboutProject/pages/AboutProject";
import AboutUniube from "../../features/aboutUniube/pages/AboutUniube";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programa" element={<AboutProject />} />
      <Route path="/faculdade" element={<AboutUniube />} />
    </Routes>
  );
}
