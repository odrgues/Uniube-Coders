import { useEffect } from "react";
import Container from "../../../shared/components/Container";
import CursoCard from "../components/CursoCard";
import { cursos } from "../data/cursos";
import { Grid, Header, Lead, Page, Title } from "../styles/cursos.styles";

function Cursos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Page>
      <Container>
        <Header>
          <Title>Cursos e atividades</Title>
          <Lead>
            Escolha um curso e faça sua inscrição. Todas as atividades são
            gratuitas e conduzidas por estudantes de tecnologia da Uniube.
          </Lead>
        </Header>

        <Grid>
          {cursos.map((curso) => (
            <CursoCard key={curso.slug} curso={curso} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}

export default Cursos;
