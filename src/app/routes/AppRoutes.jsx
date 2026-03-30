import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import Home from "../../features/home/pages/Home";
import AboutProject from "../../features/aboutProject/pages/AboutProject";
import AboutUniube from "../../features/aboutUniube/pages/AboutUniube";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/programa" element={<AboutProject />} />
        <Route path="/faculdade" element={<AboutUniube />} />
      </Route>
    </Routes>
  );
}
