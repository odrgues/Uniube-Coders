import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import Home from "../../features/home/pages/Home";
import AboutProject from "../../features/aboutProject/pages/AboutProject";
import AboutUniube from "../../features/aboutUniube/pages/AboutUniube";
import Inscricao from "../../features/inscricao/pages/Inscricao";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-o-projeto" element={<AboutProject />} />
        <Route path="/uniube" element={<AboutUniube />} />
        <Route path="/inscricao" element={<Inscricao />} />
      </Route>
    </Routes>
  );
}