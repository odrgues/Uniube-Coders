import {
  Card,
  CardTitle,
  CardTop,
  EnrollButton,
  EnrollLink,
  Meta,
  MetaItem,
  Status,
  Summary,
} from "../styles/cursos.styles";

const STATUS = {
  aberto: "Inscrições abertas",
  "em-breve": "Em breve",
  encerrado: "Encerrado",
};

function CursoCard({ curso }) {
  const aberto = curso.status === "aberto";

  return (
    <Card>
      <CardTop>
        <CardTitle>{curso.titulo}</CardTitle>
        <Status $open={aberto}>{STATUS[curso.status] ?? curso.status}</Status>
      </CardTop>

      <Summary>{curso.resumo}</Summary>

      <Meta>
        {curso.publico && (
          <MetaItem>
            <strong>Público</strong> {curso.publico}
          </MetaItem>
        )}
        {curso.cargaHoraria && (
          <MetaItem>
            <strong>Carga</strong> {curso.cargaHoraria}
          </MetaItem>
        )}
        {curso.vagas != null && (
          <MetaItem>
            <strong>Vagas</strong> {curso.vagas}
          </MetaItem>
        )}
      </Meta>

      {aberto ? (
        <EnrollLink to={`/cursos/${curso.slug}`}>Inscrever-se</EnrollLink>
      ) : (
        <EnrollButton type="button" disabled>
          Inscrever-se
        </EnrollButton>
      )}
    </Card>
  );
}

export default CursoCard;
