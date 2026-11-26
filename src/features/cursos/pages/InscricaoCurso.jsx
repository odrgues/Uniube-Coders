import { Navigate, useParams } from "react-router-dom";
import InscricaoForm from "../components/InscricaoForm";
import { cursos } from "../data/cursos";

function InscricaoCurso() {
  const { slug } = useParams();
  const curso = cursos.find((item) => item.slug === slug);

  if (!curso) {
    return <Navigate to="/cursos" replace />;
  }

  return <InscricaoForm curso={curso} />;
}

export default InscricaoCurso;
