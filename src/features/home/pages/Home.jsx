import Navbar from "../../../shared/components/NavBar";
import Banner from "../../../shared/components/Banner";
import Footer from "../../../shared/components/Footer";
import Container from "../../../shared/components/Container";
import { highlights, homeIntro } from "../data/homeContent";

import {
  Section,
  SectionBody,
  SectionDescription,
  SectionEyebrow,
  SectionTitle,
  ContentBlock,
  LogoWrapper,
  IntroWrapper,
  GraphicLine,
  Grid,
  HighlightCard,
  ImageBlock,
  ImageOverlay,
  CTABox,
  CTATitle,
  CTADescription,
  CTAButton,
} from "../styles/home.styles";

import alunosImg from "../images/alunos.jpg";
import logoUniubeCoders from "../images/logo-uniube-coders.png";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Banner />

        <Section>
          <Container>
            <SectionBody>
              <IntroWrapper>
                <GraphicLine />

                <ContentBlock>
                  <SectionEyebrow>{homeIntro.eyebrow}</SectionEyebrow>
                  <SectionTitle>{homeIntro.title}</SectionTitle>
                  <SectionDescription>
                    {homeIntro.description}
                  </SectionDescription>
                </ContentBlock>

                <LogoWrapper>
                  <img src={logoUniubeCoders} alt="Uniube Coders" />
                </LogoWrapper>
              </IntroWrapper>
            </SectionBody>
          </Container>
        </Section>

        <Section $light>
          <Container>
            <ImageBlock>
              <img
                src={alunosImg}
                alt="Alunos da Uniube reunidos em uma edição do projeto"
              />

              <ImageOverlay>
                <h3>É daqui que começam novas histórias</h3>
                <p>
                  O projeto acontece com troca, prática e gente aprendendo
                  junto.
                </p>
              </ImageOverlay>
            </ImageBlock>

            <Grid>
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <HighlightCard key={item.title}>
                    <div className="icon">
                      <Icon size={28} weight="regular" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </HighlightCard>
                );
              })}{" "}
            </Grid>
          </Container>
        </Section>

        <Section>
          <Container>
            <CTABox>
              <div>
                <CTATitle>
                  Nem todo mundo chega sabendo. <span>E é esse o ponto.</span>
                </CTATitle>

                <CTADescription>
                  Cada edição começa de um jeito. Novas pessoas, novas dúvidas,
                  novas descobertas. Aqui, a programação deixa de parecer
                  distante e começa a fazer sentido na prática.
                </CTADescription>
              </div>

              <CTAButton to="/programa">Ver como funciona</CTAButton>
            </CTABox>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
