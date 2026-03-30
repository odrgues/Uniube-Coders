import Banner from "../../../shared/components/Banner";
import Container from "../../../shared/components/Container";
import { highlights, homeIntro } from "../data/homeContent";

import {
  Section,
  WaveDivider,
  SectionBody,
  SectionDescription,
  SectionEyebrow,
  SectionTitle,
  ContentBlock,
  LogoWrapper,
  IntroWrapper,
  IntroContent,
  GraphicLine,
  Grid,
  HighlightCard,
  ImageBlock,
  ImageOverlay,
  CTASection,
  CTABox,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButton,
} from "../styles/home.styles";

import alunosImg from "../images/alunos.jpg";
import logoUniubeCoders from "../images/logo-uniube-coders.png";

const Home = () => {
  return (
    <>
      <Banner />

      <Section>
        <Container>
          <SectionBody>
            <IntroWrapper>
              <IntroContent>
                <GraphicLine />

                <ContentBlock>
                  <SectionEyebrow>{homeIntro.eyebrow}</SectionEyebrow>
                  <SectionTitle>{homeIntro.title}</SectionTitle>
                  <SectionDescription>
                    {homeIntro.description}
                  </SectionDescription>
                </ContentBlock>
              </IntroContent>

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
                O projeto acontece com troca, prática e gente aprendendo junto.
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
            })}
          </Grid>
        </Container>
      </Section>
      <WaveDivider aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,32 C160,96 320,96 480,64 C640,32 800,0 960,16 C1120,32 1280,96 1440,72 L1440,120 L0,120 Z" />
        </svg>
      </WaveDivider>
      <CTASection>
        <Container>
          <CTABox>
            <CTAContent>
              <CTATitle>
                Nem todo mundo chega sabendo. <span>E é esse o ponto.</span>
              </CTATitle>

              <CTADescription>
                Cada edição começa de um jeito. Novas pessoas, novas dúvidas,
                novas descobertas. Aqui, a programação deixa de parecer distante
                e começa a fazer sentido na prática.
              </CTADescription>
            </CTAContent>

            <CTAButton to="/programa">Ver como funciona</CTAButton>
          </CTABox>
        </Container>
      </CTASection>
    </>
  );
};

export default Home;
