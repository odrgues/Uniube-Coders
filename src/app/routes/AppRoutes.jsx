import { Routes, Route } from "react-router-dom";
import Home from "../../features/home/pages/Home";
import AboutProject from "../../features/aboutProject/pages/AboutProject";
import AboutUniversity from "../../features/aboutUniversity/pages/AboutUniversity";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programa" element={<AboutProject />} />
      <Route path="/faculdade" element={<AboutUniversity />} />
    </Routes>
  );
}
