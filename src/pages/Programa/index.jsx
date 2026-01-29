import Card from "../../components/Card"; // Atualizado para usar o componente funcional
import { aboutProgramData } from "../../data/ProgramData.jsx";

const Programa = () => {
  return (
    <>
      <div>{aboutProgramData?.content}</div>
    </>
  );
};

export default Programa;
