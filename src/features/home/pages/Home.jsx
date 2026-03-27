import Navbar from "../../../shared/components/NavBar";
import Banner from "../../../shared/components/Banner";
import Footer from "../../../shared/components/Footer";
import Container from "../../../shared/components/Container";
import { highlights, homeIntro } from "../data/homeContent";

import {
  Section,
  SectionDescription,
  SectionEyebrow,
  SectionTitle,
  Grid,
  HighlightCard,
  ImageBlock,
  ImageOverlay,
  CTABox,
  CTATitle,
  CTADescription,
  CTAButton,
} from "../styles/home.styles";

import alunosImg from "../../aboutUniube/images/maratona-1.jpg";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Banner />

        <Section>
          <Container>
            <SectionEyebrow>{homeIntro.eyebrow}</SectionEyebrow>
            <SectionTitle>{homeIntro.title}</SectionTitle>
            <SectionDescription>{homeIntro.description}</SectionDescription>
          </Container>
        </Section>

        {/* <Section $light> */}
        <Container>
          <ImageBlock>
            <img src={alunosImg} alt="Alunos da Uniube" />

            <ImageOverlay>
              <h3>Quem faz o projeto acontecer</h3>
              <p>É com gente assim que você vai aprender.</p>
            </ImageOverlay>
          </ImageBlock>
        </Container>
        {/* </Section> */}

        <Section>
          <Container>
            <Grid>
              {highlights.map((item) => (
                <HighlightCard key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </HighlightCard>
              ))}
            </Grid>
          </Container>
        </Section>
        {/* 
        <Section $light> */}
        <Container>
          <CTABox>
            <div>
              <CTATitle>
                A cada edição, mais alunos têm acesso à programação na prática.
              </CTATitle>

              <CTADescription>
                O Uniube Coders cresce a cada nova edição, chegando a mais
                escolas e ampliando o acesso à tecnologia de forma prática e
                acessível.
              </CTADescription>
            </div>

            <CTAButton to="/programa">Conhecer o projeto</CTAButton>
          </CTABox>
        </Container>
        {/* </Section> */}
      </main>

      <Footer />
    </>
  );
};

export default Home;
