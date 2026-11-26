import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import Home from "../../features/home/pages/Home";
import AboutProject from "../../features/aboutProject/pages/AboutProject";
import AboutUniube from "../../features/aboutUniube/pages/AboutUniube";
import Cursos from "../../features/cursos/pages/Cursos";
import InscricaoCurso from "../../features/cursos/pages/InscricaoCurso";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-o-projeto" element={<AboutProject />} />
        <Route path="/uniube" element={<AboutUniube />} />
        <Route path="/inscricao" element={<Navigate to="/cursos" replace />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursos/:slug" element={<InscricaoCurso />} />
      </Route>
    </Routes>
  );
}